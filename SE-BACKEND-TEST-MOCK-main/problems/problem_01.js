/**
 * โจทย์ backend ข้อที่ 1
 * คำอธิบาย : ให้รับค่า array จาก input และให้ทำการบวกค่าใน array โดยมีเงื่อนไขการเช็คดังนี้
 * 1. ถ้า array ที่ index ตำแหน่งนั้นๆ มีค่าเป็น int ให้ทำการบวกค่าลงในตัวแปร
 * 2. ถ้า array ที่ index ตำแหน่งนั้นๆ มีค่าเป็น string แต่มีตัวเลขผสมอยู่ใน string ให้ทำการตัดตัวอักษรออกและเปลี่ยนค่ามาเป็น int และทำการบวกค่าลงในตัวแปร
 * 
 * หลังจากนั้นทำการ return ค่าออกมาเป็นผลรวมของการบวก
 * 
 * ตัวอย่าง 
 * array = [1, '2a', '3abc', 4, 'def5', 'b6'];
 * 
 * ผลลัพธ์ = 21
 */

process.stdin.on('data', (data) => {
    const input = JSON.parse(data.toString());

    /**
     * This function takes an array and sums up all the numbers
     * it finds in the array. If the array element is a string,
     * it goes through each character in the string and checks if
     * it is a number. If it is, it adds it to the sum.
     * 
     * The final sum is then returned.
     */
    function exam01(arr) {
        //  Initialize a variable to hold the sum
        let result = 0;
        //  Loop through the array
        for (let i = 0; i < arr.length; i++) {
            //  Convert the array element to a string so we can
            //  loop through each character in it
            let value = arr[i].toString();
            //  Initialize a variable to hold the sum of the
            //  numbers in the string
            let sum = '';
            //  Loop through each character in the string
            for (let j = 0; j < value.length; j++) {
                //  Get the current character
                let char = value[j];
                //  Check if the character is a number
                if (!isNaN(char)) {
                    //  If it is, add it to the sum
                    sum += char;
                }
            }
            //  If the sum is not empty, add it to the result
            if (sum) {
                result += parseInt(sum);
            }
        }
        //  Return the result
        return result;
    }
    console.log(exam01(input.arr));
});