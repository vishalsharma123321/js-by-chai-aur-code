const arr = [1,2,3,4];
console.log(arr);
arr.push(5);
console.log(arr);
arr.pop();
console.log(arr);
arr.unshift(0);  // to add element to the start of the array 
console.log(arr);
arr.shift(); // to remove element from the start ;
console.log(arr);

console.log(arr.includes(3)); // will give true or false  


 const  newarr=arr.join(); // this will copy the arr to the new array but in the string format and the tupe will be string .
 console.log(newarr);
 console.log(typeof newarr);


 console.log("A " + arr);
const myn1= arr.slice(1,3)
console.log(myn1);


 

  