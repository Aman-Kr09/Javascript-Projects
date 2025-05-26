//array

//array is object in js

const array = [3,4,5,2,5,3]
const myarray = new Array(4,3,21,4)
console.log(myarray)
console.log(myarray[0])
//prototype isme bhi show hota hai


//array methods

myarray.push(8)
myarray.pop()
myarray.unshift(9)//start at first
myarray.shift()//delete from end
myarray.indexOf(4)//if not exist -1
//copy array and convert to string
const newarr = myarray.join()
//now newarr copy of myarray with string type comma separated string values

//slice , splice - slice mein end index not include and 
//splice toh end index ko bhi leta hai but that part remove from array

//if we push array in array so come up with nested array
//'because array take any type of data'
//to add array use 'concat'
//or 'spread'  --- use very common


//flat -- use to convert nested array to flat array depends on us how many we want to flat
//isarrray = check aray or not

//making of array
console.log(Array.from("aman"))
console.log(Array.from({a:"hello"}))// if not able to convert to array return empty array

//.of(put values here to make array)

