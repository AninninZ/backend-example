/**
 * โจทย์ backend ข้อที่ 2
 * คำอธิบาย : ให้สลับ index ของข้อมูลที่อยู่ใน array โดยมีเงื่อนไขคือ
 * 1. ให้สลับ index ที่ 1 กับ index ที่ 2 
 * 
 * หลังจากนั้นทำการ return array ที่สลับค่าเสร็จแล้วออกมา
 * 
 * ตัวอย่าง 
 * student = ['Bomgay', 'Ohm', 'Smart' ]
 * 
 * ผลลัพธ์
 * student = ['Bomgay', 'Smart', 'Ohm' ]
 */

process.stdin.on('data', (data) => {
    const input = JSON.parse(data.toString());

    /**
     * This function takes an array and swaps the elements at index 1 and 2.
     * It does this by storing the value at index 1 in a temporary variable,
     * then assigning the value at index 2 to index 1, and finally assigning
     * the value stored in the temporary variable to index 2.
     * The modified array is then returned.
     * @param {Array} arr - The array to be modified.
     * @return {Array} - The modified array.
     */
    function exam02(arr) {
        // Store the value at index 1 in a temporary variable.
        let temp = arr[1];
        // Assign the value at index 2 to index 1.
        arr[1] = arr[2];
        // Assign the value stored in the temporary variable to index 2.
        arr[2] = temp;
        // Return the modified array.
        return arr;
    }

    console.log(exam02(input.arr));
});