/*Control Flow กลุ่มคำสั่งที่ใช้ควบคุมการทำงานของโปรแกรม

-- แบบลำดับ Sequence
-- แบบมีเงื่อนไข Condition
-- แบบทำซ้ำ Loop



//condition if

const withdraw = 5500 , wallet = 5000

if(withdraw<=wallet){
    console.log(`
    จำนวนเงินที่ต้องการถอนคือ : ${withdraw}
    ยอดเงินในบัญชี : ${wallet}
    ยอดเงินคงเหลือ : ${wallet-withdraw}
    `)
}else if(withdraw>wallet){
    console.log(`
    จำนวนเงินที่ต้องการถอนคือ : ${withdraw}
    ยอดเงินในบัญชี : ${wallet}
    ขออภัยจำนวนเงินของคุณไม่เพียงพอต่อการถอน
    `)
}

*/