const myNums = [1,2,3]

const total = myNums.reduce( function (acc,currval){  // this is using normal functions 
    // console.log(`accumulator = ${acc} and current value = ${currval}`);
    return acc+currval
},0 )  // here after the scope {} we have passed the value from where the accumulator starts 

// console.log(total);

// lets use arrow function to demonstrate the reduce
const mytotal = myNums.reduce( (acc,currval) => acc+currval , 4 )   // this is how we use the arrow function and pass the value before the () using , like (  , passedvalue)
// console.log(mytotal);


// OK LETS SEE HOW WE CAN USE THE reduce() IN REAL LIFE SHOPING TO ADD ITEAMS   

const shopingCart = [

    {
        courcename:"core java",
        price:1000
    },

    {
        courcename:"core pyhton",
        price:500
    },
    {
        courcename:"core webdev",
        price:1000
    },
    {
        courcename:"core DSA",
        price:300
    }
]

const courceTotal=shopingCart.reduce(  (acc, iteam)=> acc+iteam.price ,0);
console.log(courceTotal);