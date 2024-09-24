/**
 * ID: 65160086
 * NAME: รชต ขาวงาม
 * TEAM: 1
 */
function exam05(stdid=""){
    // เช็คว่า id ที่เข้ามามี 8 ตัวหรือ 9 ตัวเผื่อการ return ค่าที่ต่างกัน
    if(stdid.length == 8){
    let id = stdid
    // สร้างตัวแปร index สำหรับบอกตำแหน่ง และ idValue สำหรับเก็บข้อมูลที่คูณแล้ว
    let index = 0;
    let idValue = [];
    for (let i = 9; i > 1; i--){
        // เอาข้อมูลตำแหน่งตาม index ไปคูณด้วย i จาก 9-2
        idValue[index] = parseInt(id[index]*i)
        index++;
    }
    // ตัดข้อมูลช่อง 0,1 และเอาไปบวกกัน
    let group1 = idValue.slice(0, 2).reduce((sum, value) => sum + value, 0);
    // ตัดข้อมูลช่อง 2,3 และเอาไปบวกกัน
    let group2 = idValue.slice(2, 4).reduce((sum, value) => sum + value, 0);
    // ตัดข้อมูลตั้งแต่ช่อง 4 และเอาไปบวกกัน
    let group3 = idValue.slice(4).reduce((sum, value) => sum + value, 0);

    // เอาข้อมูลกรุ๊ป2 ไปคูณด้วยค่า id ตำแหน่งสุดท้ายแล้ว mod ด้วย 8
    let findIndex = (group2*id[id.length-1])%8;
    // เอาข้อมูลกรุ๊ป 1 และ 3 มาบวกกัน
    let sumGroup = group1+group3;
    // สร้างตัวแปรสำหรับเก็บค่าข้อมูลใน index ที่มีค่าตั้งแต่ findIndex 
    let indexValue;
    // สร้างลูปตั้งแต่ findindex และไปอีก 8 รอบ เพื่อให้ครบจำนวนตัวอักษร
    for (let i = findIndex; i < findIndex+8; i++){
        // เอา i มา mod 8 เพื่อไม่ให้หลักมันเกินจำนวนของ array
        let locate = i % 8;
        // เช็คว่า id ในตำแหน่งนั้นๆมีค่า 
        if(id[locate] !== "0"){
            // เก็บข้อมูลช่องนั้นลง indexValue แล้ว break loop
            indexValue = id[locate];
            break;
        }
    }
    // นำข้อมูลกรุ๊ป 1และ 3 ที่บวกกันมา mod ด้วย indexValue ที่ได้มาเป็นหลักตรวจสอบ
    let authKey = sumGroup%indexValue;
    return authKey
    }else if(stdid.length == 9){    
        // ตัดข้อมูลไม่เอาตัวสุดท้ายเพราะเป็นหลักตรวจสอบ
        let id = stdid.slice(0, -1)
        // เก็บข้อมูลหลักสุดท้ายไว้ตรวจสอบหลังได้ค่า
        let auth = stdid.slice(-1);
        // เหมือนกันกับข้างบน
        let index = 0;
        let idValue = [];
        for (let i = 9; i > 1; i--){
            idValue[index] = parseInt(id[index]*i);
            index++;
        }
        let group1 = idValue.slice(0, 2).reduce((sum, value) => sum + value, 0);
        let group2 = idValue.slice(2, 4).reduce((sum, value) => sum + value, 0);
        let group3 = idValue.slice(4).reduce((sum, value) => sum + value, 0);
    
        let findIndex = (group2*id[id.length-1])%8;
        let sumGroup = group1+group3;
    
        let indexValue;
        for (let i = findIndex; i < findIndex+8; i++){
            let locate = i % 8;
            if(id[locate] !== "0"){
                indexValue = id[locate];
                break;
            }
        }
        
        let authKey = sumGroup%indexValue;
        // เช็คว่าหลักตรวจสอบที่ส่งเข้ามาตรงกับที่คำนวนหรือไม่ ใช่คืน true ไม่คืน false
        if(auth == authKey){
            return true;
        }else{
            return false;
        }

    }else{
        return null;
    }
}

module.exports = exam05;