// the IIFE stands for IMMEDIATELY INVOKED FUNCTION EXPRESSIONS.

// how we write iife REMBER ()() AND TO END FIRST IFFE USE ;    
(function fun(){
    console.log("its working ");
})();

// you can not write second IIFE wihtout ending the first one use ; always 
// SECOND WAY OF WRITING A IIFE
(() => {
    console.log("DB connected ");
})();


//how to pass function in IIFE
((name)=>{
    console.log(`this is how we pass element in the function and you name is ${name}`);}
)("vishal");