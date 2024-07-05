// using this 
const object1={
    username:"vishal sharma ",
    userId:"1234rsc",
   greating: function (){
       console.log(this); 
       return `hi ther ${this.username}`; // this is how we use this to get inner function of the object .
    }
}
console.log(object1.greating());

// what if we change the user name then what will get agter using the this .
object1.username="hulk ";
console.log(object1.greating());

// ########################### this only works in the object and in the functions .
// lets see how we make arrow functions 

const chai = (num1,num2) => {return num1+ num2}; // this is how we can write the arrow function and if we dont want to use the return then we can use ();
console.log(chai(4,4));
const chai1=(num1,num2) => (num1+num2);
console.log(chai1(9,9));

// and if we want to return an object then we can use ({object}) like this 
const chai2=() => ({name:"batman"})
console.log(chai2());