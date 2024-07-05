const arr=[1,2,3,4,15,6];
// using forEach loop in forEach we don not need the name of the function . 
//  arr.forEach( function(index){console.log(index);})

// arr.forEach( (index)=>{
    // console.log(index);
//}) // using arrow function 

function printme(print){
    // console.log(print);
}
// arr.forEach(printme);

arr.forEach( (item ,index,arr )=>{  // for each can also give the iteam index and the full arr
    // console.log(item,index,arr);
})
 

// lets see how the for Each works in the arr of objects 

const mycoding = [
    {
        language:"java",
        file : "javacode.js"
    },
    {
        language:"python",
        file : "pythoncode.py"
    },
    {
        language:"c++",
        file : "c++code.cpp"
    }
]

mycoding.forEach( (index)=>{
console.log(index.file);  // to acces the file
console.log(index.language);  // to acces the language
console.log(index);  // to see the full arr of the objects 

} )















