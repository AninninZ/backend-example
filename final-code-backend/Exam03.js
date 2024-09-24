/**
 * ID: 65160086
 * NAME: รชต ขาวงาม
 * TEAM: 1
 */
const readline = require('readline');

// Create an interface for reading input from the console
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function getInput() {
  return new Promise((resolve) => rl.question('', resolve));
}

async function exam03() {
  // รับค่าจำนวนสำหรับลูป
  let num = await getInput();
  // ประกาศตัวแปร arrays สำหรับเก็บค่า
  let data = [];
  // สร้างลูปตามจำนวน num ที่รับเข้ามา
  for (let i = 0; i < num; i++){
    // เก็บข้อมูล
    data[i] = await getInput();
  }

  let sort_method = await getInput();
  if(sort_method.toLowerCase() == "asc"){
    // ใช้ sort a-b เพื่อเรียงค่าแบบ น้อยไปมาก 
    data.sort(function(a, b){return a-b});
  }else if (sort_method.toLowerCase() == "desc"){
    // ใช้ sort b-a เพื่อเรียงค่าแบบ มากไปน้อย 
    data.sort(function(a, b){return b-a});
  }
  return  data;
}


module.exports = exam03;