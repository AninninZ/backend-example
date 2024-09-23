/**
 * โจทย์ backend ข้อที่ 3
 * คำอธิบาย: ให้รับค่า array 2 ตัว แล้วเอาค่า array ในตำแหน่งที่ index ตรงกัน มาเปรียบเทียบกันโดยมีเงื่อนไขดังนี้
 *
 * Alice และ Bob จะทำการสร้าง array คะแนนที่จะเอามาเปรียบเทียบกัน ถ้าคะแนน ณ ตำแหน่งเดียวกัน
 * ฝั่งไหนมากกว่า ฝั่งนั้นจะได้คะแนน แต่ถ้าคะแนนเท่ากัน ก็จะไม่ได้คะแนนในส่วนนั้น ให้นับคะแนน และ
 * คืนค่าเป็น array 2 ค่า โดยที่ค่าแรกจะเป็นคะแนนของ Alice และค่าที่สองจะเป็นของ Bob
 *
 * โดยสรุป เงื่อนไขการให้คะแนนจะเป็นดังนี้
 * - ถ้า Alice ณ index นั้น มากกว่า (>) Bob ณ index เดียวกัน Alice จะได้คะแนน 1 คะแนน
 * - แต่ถ้า Bob ณ index นั้น มากกว่า (<) Alice ณ index เดียวกัน Bob จะได้คะแนน 1 คะแนน
 * - ถ้าเท่ากัน จะไม่ได้คะแนนทั้งคู่
 *
 * ตัวอย่างเช่น
 * Alice array = [1, 2, 3]
 * Bob array = [7, 1, 3]
 *
 * การเปรียบเทียบจะเป็นดังนี้
 * - Alice array index ที่ 0 มีค่าเป็น 1
 *   Bob array index ที่ 0 มีค่าเป็น 7
 *   ดังนั้น คะแนนครั้งนี้ Bob จะได้ไป 1 คะแนน
 *
 * - Alice array index ที่ 1 มีค่าเป็น 2
 *   Bob array index ที่ 1 มีค่าเป็น 1
 *   ดังนั้น คะแนนครั้งนี้ Alice จะได้ไป 1 คะแนน
 *
 * - Alice array index ที่ 2 มีค่าเป็น 3
 *   Bob array index ที่ 2 มีค่าเป็น 3
 *   ดังนั้น คะแนนครั้งนี้จะไม่มีใครได้คะแนน
 *
 * ดังนั้น คำตอบจากข้อมูลนี้จะได้เป็น [1, 1]
 */

process.stdin.on('data', (data) => {
    const input = JSON.parse(data.toString());

    /**
     * This function takes two arrays, alice and bob, and compares the values at the same index.
     * If Alice's value is greater than Bob's, Alice gets a point.
     * If Bob's value is greater than Alice's, Bob gets a point.
     * If the values are equal, no points are awarded for that comparison.
     * The total points for Alice and Bob are returned as an array.
     * @param {Array} alice - The first array to compare.
     * @param {Array} bob - The second array to compare.
     * @return {Array} - An array with two elements, the first being Alice's score and the second being Bob's score.
     */
    function exam03(alice, bob) {
        // Initialize the scores for Alice and Bob to 0.
        let bobScore = 0;
        let aliceScore = 0;

        // Loop through the arrays and compare the values at the same index.
        for (let i = 0; i < alice.length; i++) {
            // If Alice's value is greater than Bob's, increment Alice's score.
            if (alice[i] > bob[i]) {
                aliceScore += 1;
            }
            // If Bob's value is greater than Alice's, increment Bob's score.
            else if (alice[i] < bob[i]) {
                bobScore += 1;
            }
            // If the values are equal, no points are awarded for that comparison.
        }

        // Create an array with the total scores for Alice and Bob.
        let result = [aliceScore, bobScore];

        // Return the array with the scores.
        return result;
    }

    console.log(exam03(input.alice, input.bob));
});