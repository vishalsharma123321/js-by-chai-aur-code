// ok here is a qustion can you change the value of the PI which is 7.14 if yes then how if no then why 
// so we will find the anser 

// by using Object.getOwnPropertyDescriptor we check the properties like this   
// of an object 
//   value: 'papechai ',
//   writable: true,
//   enumerable: true,
//   configurable: true

const descripter = Object.getOwnPropertyDescriptor(Math,"PI")
// below the properties of pi are false thats why we cant change the value .
/*
{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}
*/


console.log(descripter);

const chai = {
    name : "papechai ",
    price : 250 ,
    isAvailable : true,
    orderchai : function(){
        console.log("pape the destroyer ");
    }
}
// console.log(chai);

console.log(Object.getOwnPropertyDescriptor(chai,'name'));
// the properties of the chai name are 
/*
{
  value: 'papechai ',
  writable: true,
  enumerable: true,
  configurable: true
}
*/

// how we set the above properties 
// syntex 
// here we have made the properties false 

// ######## if we set the property enumerable to false then we can not loops this object
Object.defineProperty(chai,'name',{
    writable : false ,
    enumerable : true , 
    configurable : false,
   
})

// here is the out put 
chai.name = "pape the god ";
// console.log(chai.name);
// console.log(Object.getOwnPropertyDescriptor(chai,'name'));

// if we set the property 
for (const [key,value] of Object.entries(chai)) {
   if(!(typeof value =='function')){
    console.log(`${key}  :  ${value}`);
   }
}
// console.log(chai.orderchai());














