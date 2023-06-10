/*Variables and Data Types: 
Learn how to declare variables, understand different data types 
(such as numbers, strings, booleans, arrays, and objects) , and work with variables effectively.
*/

/*
ตัวแปร == ชื่อที่ถูกนิยามขึ้นมาเพื่อใช้เก็บค่าข้อมูลสำหรับนำไปใช้งานในโปรแกรม

ตัวแปรใน java scirpt เป็นตัวแปรแบบ dynamic typing
คือ ชนิดของตัวแปรจะเป็นอะไรก็ได้ตามที่ตัวแปรเก็บค่าโดยไม่ต้องประกาศชนิดของข้อมูล

การนิยามตัวแปร

var ตัวแปรที่เป็นรูปแบบ gobal สามารถเรียกใช้งานได้แม้จะประกาศอยู่ใน function หรือข้างในโปรแกรม
let ตัวที่ค่าภายด้ายในตัวแปรไม่คงที่ มีการเปลี่ยนแปลงข้อมูลในตัวแปร
const ตัวแปรคงที่ ไม่สามารถเปลี่ยนค่าภายในตัวแปร

สิ่งที่เกี่ยวข้องกับตัวแปร
typeof เช็คชนิดข้อมูลภายในตัวแปร
null ไม่มีการกำหนดค่าโดยผู้เขียน
undefined ไม่มีการกำหนดค่า (เป็นค่าเริ่มต้นของโปรแกรม)

*/

/*data-type
string ข้อความ รูปแบบการเขียน "" ''
number ตัวเลข ตัวเลขจำนวนเต็ม integer /ตัวเลขที่มีจุดทศนิยม decima/floating point
boolean ค่าทางตรรศาสตร์ True/False
array ชุดข้อมูล
object ข้อมูลเชิงวัตถุ


*/

/*
//string
const getname = 'Thaweekhun'
console.log("ข้อมูลในรูปแบบของ String :",getname)

//number
const numInt = 10
const numF = 10.1

console.log("Integer",numInt,"Float",numF)

//boolean

const result = true
console.log("ประยุทธิ์เป็นควายจริงหรือไม่?",result)

//array
const colors = ['red','green','blue']
console.log("ชุดข้อมูลสี",colors)

//object
const personal = {
    name : 'poy',
    age : 23, //ใกล้ตายแล้ว
    address : 'warinchamrab'
}

console.log(personal.name)

*/