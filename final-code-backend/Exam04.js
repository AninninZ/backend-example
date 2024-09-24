/**
 * ID: 65160086
 * NAME: รชต ขาวงาม
 * TEAM: 1
 */
function exam04(arry, rotate){
    let n = rotate % arry.length;
    // นำส่วนท้ายของอาร์เรย์มาต่อกับส่วนหน้า
    // slice(-n) เช่น ข้อมูล [1, 2, 3, 4, 5] slice(-3) = [ 3, 4, 5 ] slice(0, -3) = [ 1, 2 ] ไม่เอา 3 ตัวสุดท้าย
    let rotatedArr = arry.slice(-n).concat(arry.slice(0, -n));
    // คืนค่า arrays ที่สลับที่แล้ว
    return rotatedArr;
}

module.exports = exam04;