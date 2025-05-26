//for loops == exact same concept as c++
//while
//do while
//loops concept Same as c++
//continue,break



//arrays specific loop

// for of , for in

//["",""]
//[{},{}]

const arr =[1,23,4,4,4]
for  (const num of arr){ //arr == yha koi bhi object rkh skte hai
    console.log(num)
}

const h = "hello" // print character
for  (const num of h){
    console.log(num)
}



//*************in objects */
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);     //not accessible by this as not iterable
// }

const myObject1 = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);   //that how you can access from object
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(programming[key]);
}


//*****************************************************************foreach*******************************************//
const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){ //here callback function and callback function has no name
//     console.log(val);
// } )

// coding.forEach( (item) => {//arraw functons
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe) //pass function directly

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )




const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName); //here to get object from array is get so simple
} )


//******************************************************** **********************************/
// const coding = ["js", "ruby", "java", "python", "cpp"]


// const values = coding.forEach( (item) => {
//     //console.log(item); //for each loop kuch bhi return nhi krta undefined
//     return item
// } )

// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => {
//     return num > 4 //return value with comparision
// } )

//below and above both doing same work

// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )

// console.log(newNums);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History') //here scope open

  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"  //here scope close but use of return we open the scope
})
  console.log(userBooks);




/*************************************************************************reduce function**************/
const myNums1 = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0) //0 is basiccally initial values of accumulator and afte that acc=acc+currval


//using arrow functions
const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0) //use . operator to access object item

console.log(priceToPay);