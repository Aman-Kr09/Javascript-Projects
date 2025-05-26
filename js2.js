//stack and heap memory

//stack(primitive)-copy of value and heap(reference)-reference of value
let a = "aman"
let b=a
//if b change krenge toh koi frk nhi pdega a pe


//heap
let userone = {aman: "hello"}
let c = userone
c.aman = "bye"
console.log(userone) //both are connected with reference once gets change reflect on another
