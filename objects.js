//singleton if constructor se bnega toh singleton bnega
//constructor method
//Object.create


//Object litrals - yha singleton nhi bnta

const mysym = Symbol("key1")

const obj = {
    name : "aman",
    "full name": "aman kumar",
    [mysym]:"mykey1",//is square brackets mein nhi loge then not considered as key
    age : 20,email:"aman.com"
}

//access using
//obj.name     == we can't access full name by this method
//obj["name"]   == used very common
//obj["full name"]
//obj[mysym] == symbol only accesed by this method

//change value or freeze
obj.age =21
Object.freeze(obj)
obj.age =24 //now not change

//object+functions
obj.greeting = function(){
    console.log(`hello aman ${this.email}`) //acces elements here by using this
}
console.log(obj.greeting())//return that fuction but if
//greeting only use return function anonymous


//till yet we discuss using literal

//now learn using singleton
//how to declare using constructor
const obj1 = new Object()



//back to literal object
//onject inside object
const regularuser = {
    email :"hello.com",
    fullname: {
        firstname:"aman",
        sirname:"kumar"
    }
}



//const obj3 = {obj1,obj2} -- make nested object

//combine object
// const obj3 = Object.assign({},obj1,obj2)
//{} -- used because saari value isme jaa rhi hai otherwise add in obj1
//use 'spread' to combine


//object inside an array
const arrays = [
    {email:"hello"},{},{}
]
//access
arrays[0].email

//Object.keys(objName) --give keys same for value
//entries -- convert obj into array of array


//ask is object has that property == check by functions



//*********************objects

//destructuring in object also it in arrays
//in object
const x ={
    coursename:"js",
    price:99
}
const {coursename} = x
console.log(coursename) // now you can use it without . operator

//APIs  --  return in json format
//json -- also object but no name
// {
//     //both keys and valuein string
//     "a":"hey"
// }

//or json in array format
// [
//     {},
//     {}
// ]