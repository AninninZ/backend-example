/**
 * โจทย์ backend ข้อที่ 4
 * หาค่า max และ min จาก array ที่กำหนดให้
 * จากนั้นนำค่า max และ min มาบวกกันแล้ว return ออกมา
 * 
 * ตัวอย่าง
 * array = [ 3, 4, 5, 1, 2 ]
 * 
 * ผลลัพธ์ = 6
 */

process.stdin.on('data', (data) => {
    const input = JSON.parse(data.toString());

    function exam04(arr) {
        //  We need to find the maximum and minimum value in the given array
        //  and then add them together and return the result
        //  So first, we need to get the maximum value in the array
        let max = Math.max(...arr);
        //  And then we need to get the minimum value
        let min = Math.min(...arr);
        //  Now we can add them together
        let result = max + min;
        //  and return the result
        return result
    }

    console.log(exam04(input.arr));
});