/**
 * ID: 65160086
 * NAME: รชต ขาวงาม
 * TEAM: 1
 */
function exam01() {
    const readline = require('readline');

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    return new Promise((resolve) => {
        rl.question('', (input) => {
            let sum = 0;
            // TODO: คำนวณผลรวมของตัวเลขที่รับเข้ามา
            // loop ตามจำนวนตัวอักษรของข้อความที่ส่งเข้ามา
            for (let i = 0; i < input.length; i++){
                // ประกาศตัวแปร char เพื่อเก็บตัวอักษรแต่ละตัวของ input
                let char = input[i];
                // เช็คว่า char เป็น numeric หรือเปล่า
                if(!isNaN(char)){
                    // ถ้าใช่แปลงค่าเป็น int และบวกเก็บไว้ใน sum
                    sum += parseInt(char);
                }
            }
            // คืนค่า sum
            resolve(sum);
        });
    });
}

module.exports = exam01;
