const myNums=[1,2,3,4,5,6,7,8,9,10]

// using map and map's syntex          // ############ important ##########
const number = myNums.map( (num)=> num+10)   // the diffrence between map and filter is that filter returns true values only but 
                                            // map can return amything .
// console.log(number)

// lets do it using the forEach
const arr=[];
myNums.forEach( (num)=> {
    arr.push(num+1)
} )
// console.log(arr);

// lets see how we do chaining and how it works 
const newNumbers = myNums.map( (num)=> num+10 )
                         .map( (num)=>num+2 )  // int the second map the values will be passed by the first chain or map which are updated in the first map not the same valus as the array we decler by the name of myNUMS
                         .filter( (num)=> num>=20 ) // this chain will recive updated values by the upper map.

console.log(newNumbers);























