//strings
let a = "aman"
const b =new String('aman')
console.log(`hello ${a}`)
//there are many functions in string in js
//indexing => a[0]
console.log(a.__proto__)//object = means all it functions
//proto give empty string but that is not empty many functions
//.lenght(),.indexof('t'),charAt(5)
//slicing,and many functions
//trim -- remove spaces  ,  replace -- replace space from -




//*********************number and maths**********//
const x=80808
const y = new Number(100)
//after console of y  -- number 100
//convert to string y.toString()
//convert to fixed  y.toFixed(2) -- 100.00
//toprecision(9) - 9 digits mein ans do
//toLocaleString('en-IN')
//Number.MIN_VALUE or MAX_VALUE

//MATHS Library
console.log(Math)
console.log(Math.abs(-4))
//round,floor,ceil,sign ,random
//random values used to make game or something else
//(max-min)*10 - min == used to calculate random value in particular range


//*******************Date and time *************//
let myDate = new Date()
console.log(myDate.toString());
//date ka datatype is also object
let mycreatedate = new Date(2023,0,3,3,5)
let mycreatedate1 = new Date("o1-04-3005")

//Now
let mytimestamp = Date.now()
console.log(mytimestamp.getTime())
//in sec == so divide by 1000
//many functions check on documentation

// myDate.toLocaleString('default',{
//     weekday: "long"
// })