// falsy values 
// false , 0 , -0 , Bigint 0n , "",null,undefined ,NAN 

// Except this all values are truthy value .

// lets see some confusing truthy values.
// "0" ,  'false' , " " , [] , {} , function(){}

// we know that veriables in the js can take any thing like below 
const emil = []; // here we have passed a empty arry named email it the js will take it and treat as true because its a truthy value

// lets see with example 
if(emil){
    console.log(" unvalid email is excuted :  "); // this will get excuted 
}

// to make sure this kind of truth valus dont get exectued we can apply some condations like below 
if(emil.length>1){
console.log("now i wont get executed : "); // now it wont execute any empty veriables .
}

// lets see how to deal with the objects ;

const demoObject = {};
if(demoObject){
    console.log(" empty demo is executed :");
}

// to deal with it we will use the se of the keys of the array if the key set is less than 0 then its empty.
if(Object.keys(demoObject).length>0){
    console.log("now i wont get executed : "); // now it wont execut the empty set becaue we are counting the number of the keys 
}



// ##################### Nullish Coalescing operator (??) : null undefined 
// this is used when we are taking values from the server some times we dont get simgle value we get multiple like 
// we may get null and a number or undefined and a number , if two numbers then the first one will get executed . 
console.log();
console.log();

console.log("Nullish Coalescing operator (??) : null undefined ");
let val1 = 5 ?? 10 ;
let val2 = undefined ?? 7;
let val3 = null ?? undefined ;
let val4 = 15 ?? null;
let val5 = null ?? 10 ?? 15;
console.log(val1);
console.log(val2);
console.log(val3);
console.log(val4);
console.log(val5);


// Termiary operator 

console.log();
console.log();

console.log("lets see how Terniary operators work  syntax = condation ? true:false");
let icetea = 200;
icetea<=100 ?console.log("istea is affordable"):console.log("icetea is expencive ");
















