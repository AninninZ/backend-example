/**
 * ID: 65160086
 * NAME: รชต ขาวงาม
 * TEAM: 1
 */

function exam02(){
    const readline = require('readline');

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    return new Promise((resolve) => {
        rl.question('', (input) => {
            // TODO: 
            let result = [];
            // ประกาศตัวแปร maxCount เพื่อหาจำนวนตัวอักษรที่ติดกันมากที่สุด
            let maxCount = 1;
            // ประกาศตัวแปร count เพื่อนับจำนวนตัวอักษรที่ติดกัน
            let count = 1;
            // สร้างลูปสำหรับนับตัวอักษรโดยจะนับถึงแค่ก่อนตัวสุดท้ายเพื่อไม่ให้ nullpointer เวลา i+1
            for (let i = 0; i < input.length-1; i++){
                // ถ้าข้อมูลตัวปัจจุบันมีค่าเท่ากับตัวถัดไปให้เพิ่มค่า count 1
                if(input[i] === input[i+1]){
                    count++;
                }else{
                    // ถ้าตัวถัดไปไม่ตรงกันให้เปลี่ยนค่า count เป็น 1
                    count = 1;
                }
                // ถ้าค่า count มีค่ามากกว่า maxCount ให้เปลี่ยนค่า maxCount เป็น count เพื่อให้เป็นค่ามากสุด
                if(maxCount < count){
                    maxCount = count;
                }
            }
            // จบลูปนี้เราจะได้ค่า maxCount สำหรับบอกว่าจำนวนตัวอักษรที่ติดกันมากที่สุดเป็นค่าใด
            
            // เปลี่ยนค่า count กลับไปเป็น 1 สำหรับนับใหม่
            count = 1;
            // สร่างลูปสำหรับเช็คว่าตัวอักษรใดบ้างที่เข้าเกณฑ์ maxCount
            for (let i = 0; i < input.length-1; i++){
                // ถ้าข้อมูลตัวปัจจุบันมีค่าเท่ากับตัวถัดไปให้เพิ่มค่า count 1
                if(input[i] === input[i+1]){
                    count++;
                }else{
                    // ถ้าตัวถัดไปไม่ตรงกันให้เปลี่ยนค่า count เป็น 1
                    count = 1;
                }
                 // ถ้าค่า count มีค่าเท่ากับ maxCount ให้เก็บข้อมูลตัวนี้
                if(count === maxCount){
                    // เช็คว่าตัวอักษรที่จะใส่ไม่มีอยู่ใน arrays ก่อนแล้วจึงจะใส่ได้
                    if(!result.includes(input[i])){
                        result.push(input[i])
                    }
                }
                // ถ้ารอบนี้เป็นรอบสุดท้ายของลูปและค่า maxCount มีค่าเป็น 1 ให้เก็บค่าตัวสุดท้ายของ input
                // เนื่องจากลูปจะไปไม่ถึงตัวสุดท้ายจะเก็บค่าของตัวสุดท้ายใน input ไม่ได้
                // เช่น 12345 มีค่่า maxCount = 1 ต้องเก็บทุกตัวแต่ลูปจะไปแค่ถึง 4 เลยต้องเก็บ 5 ไปด้วย
                if(i === input.length-1 && maxCount === 1){
                    result.push(input[input.length-1])
                }
            }
            resolve(result);
        });
    });
}

module.exports = exam02;