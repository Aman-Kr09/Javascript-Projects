// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);

// for (const [key, value] of map) {
//     console.log(key, ':-', value);    //that works perfectly
// }

// for (const [key, value] in map) {
//     console.log(key, ':-', value);    //no error but not run because map is not iterable  -- and in means key and values inside map
// }

// for (const key in map) {
//     console.log(key);    //not give error butnot show anything because map is not iterable
// }


//************************************************************ */
// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key); //not accessible by this
// }




//*************************************************************************maps with arrow functions */
const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})
//map also work as filter but here changing not comparision

//using map and filter together
const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40) //uper ki values pe condiotion lga di

console.log(newNums);