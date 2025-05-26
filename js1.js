//javascript is dynamic type language
//typescript is static type lanuage
//semicolon lgao ya na koi frk nhi

//variable
console.log("hello aman")
const digit=4
let str = "hello"
console.table([digit,str])

//datatypes and ecma standards
"use strict"; //treat all js code as newer version
//alert(9) //we are using nodejs not browser

//datatypes - two types - primitive datatypes
//string,number, bool, null, undefined,symbol,bigint
//reference datatype - array,objects,functions
let a=1;
let b="string";
const id1 = Symbol('123')//same yhi do symbols equal nhi honge that is constant but diractly value comparision se match ho jaate hai
//etc.
//tyoe of undefined is also undefined
//reference --- 
const heros = [ "aman","shinu","chao"]
let myobj = {
    name:"aman",age:20
}
const myFunction =function(){
    console.log("hello world")
}

//datatype conversion
let x="7"
let value = Number(x)
console.log(typeof value)  //if string has number +alphabets => give NaN

let boolean = Boolean(x)//if empty false not true
let stringconversion = String(x)


//************************************** operations */
let value1 = 8
let negvalue1 = -value1
//+,-,%,*,/,**

//string concatenation
let str1 = "hello"
let str2 = "aman"
let strf = str1+str2

//int + string
//1+3+"5"=45
//"1"+1+5 = 115

// console.log(+true)=> 1 , +""=0
//a=0 , a++ se increment = prefix and postfix theory as c++



//*******************************comparision */
console.log(4>2) //result in bool
console.log(null==0)//false
console.log(null>=0)//true here conversion done null to 0
//=== see dataytpe too
console.log("8"===8)

//*****************//
