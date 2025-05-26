//immefiately invoked function expressions (IIFE)

(function chaii(){
    console.log(`DB connnected`)
})() //direct function call
//that above is iifi
//we use iifi to stay safe from global scope polluiton

//we can use arrow functions also

(function chai(){
    console.log(`Db connected`)
})(); //semicolon if u r using iifi because it not knnow where to end the iifi

(function chaiaurcode(){
    console.log(`Db connected next`)
})();

((name) => {
    console.log(`Db connected next`);
})(`aman`);

//two iifi likhna ho toh semicolon imp...