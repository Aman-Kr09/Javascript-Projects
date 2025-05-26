const { use } = require("react")

//functions
function funcNAME(){
    console.log("hello aman")
}
funcNAME() // funcNAME -- isse print nhi hoga only tekk there is a function

function add(x,y){
    console.log(x+y)//just print
    let result =x+y
    return result
    //after that codenot works
}
const result=add(8,9)//both result have different scopes
console.log(result)

//here functions same as python
//if kuch bhi pass nhi kiya than undefined
// if else ke shuru hm form mei use krte hai that fill that blank return hi krwa dete hai so jbtk wo fill nhi hoga aage not to proceed



//if we don't know the how many function arguments
//so what to do
//rest operator
function funccart(x,y,...z){
    return z
}
console.log(funccart(5,6,7,8,5,4,4))//x=5,y=6,z=[7,8,5,4,4]


//passing object in function
const obj4 = {
    user:"aman",
    age:20
}
function handleobject(anyobject) {
    console.log(`username is ${anyobject.user}`)
    
}
handleobject(obj4) //or direct pass object
// typesript mein type safety check ho jaati hai
//but in javascript we have to do by using "if-else"


//passing array same as object get by indexing





//****************************************SCOPES ****//

//{ curly braces is scope in all programming}
if (true){
    let m = 10//here local
    const n = 34//here local
    var v =9//khi bhi likho global
    v1=9//khi bhi likho global
}

//if let and const declared outside of curly braces that is global
//block and global scope
//scopes same as python

//curly braces ke bahar ka global ki trh treat krega
//chahe nested kyu na ho




//can holdfuntion in variable
const addtwo =function(num){
    return num+2
}
addtwo(7)//can't write this before initialization
//but if define normal function so usme here in js pehle bhi call kr skte hai before initialisation





//***********************arrow functions************* *//
const user = {
    username: "aman",
    age:20,
    welcoome : function(){
        console.log(`${this.username}`)//this basically reefrs to current object
        console.log(this)//print current object
    }
}
user.welcoome() //call that message

console.log(this) //here it is in empty object
//but in browser that runs to show a window

//arrow functions
function chai(){
    console.log(this)//print about this function
}
const chai = ()=>{//aisa dikhta hai arrow functon
    let usernames = "aman"
    console.log(this)//{} -- arrow functions mein this use nhi kr skte
}


//what is arrow function
const addTwo = (num1,num2) => (num1+num2)
//{} if curly braces so return ka use krna pdega
//if () no need to return just close in parenthesis like below:
const addTwo1 = (num1,num2) => (num1+num2)
const addTwo2 = (num1,num2) => ({usename:"aman"})//return using round braces otherwise undefined


//in loops arrow functions used