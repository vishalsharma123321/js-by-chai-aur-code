// we can do objects single ton and also littrels 

// below is the example of the littrels
// this is how decler littrels object 
// const littrelsObject = {}


const jsuser = {
    "full name ": "vishl subhah sharma ",
    name : "vishal sharma ",
    age : 21 ,
    gmail : "vishalsharma 2212003@gmail.com",
    empolyed : false 
}

console.log(jsuser.name);  // its not prefered to use this because if the name is in this format "name" we cant access this .
console.log(jsuser.gmail);
//console.log(jsuser.ful name ); // we can't use this now thats why its not prefred to use like this 

// prefered 
console.log(jsuser["name"]); 
console.log(jsuser["full name "]);  // here we can use acces it 


// making a symbole 
const newsymbol = Symbol("key1") // this is how we make a symbol 
console.log(newsymbol);

// now we have to make the symbol as key in the object .
const newobject = {
    newsymbol:"My data type is not symbol ",
    [newsymbol]:"I am a symbol "
}
console.log( newobject["newsymbol"]); // this is the non symbol data type .
console.log( newobject[newsymbol]); // and this is the symbol data type . 

// how to change the objects key 
jsuser.gmail="vishalsharma2@gmai.com"
console.log(jsuser.gmail);

// if we dont want  any one to change any keys value 
// Object.freeze(jsuser);
jsuser.gmail="vishal2@gmai.com"

console.log(jsuser);

// how to make function in the objects 
jsuser.greating1=function(){
    console.log("hi there this side vishal ");
}
console.log(jsuser.greating1());

// we can also add veriables in the functin 
jsuser.greating2=function(){
    console.log(`hi the ${jsuser.name} your age is ${jsuser.age} and are you employed ${jsuser.empolyed}`);
}
console.log(jsuser.greating2());