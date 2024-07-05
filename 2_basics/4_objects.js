// here we will do the object singolton
// when we declare the object like 
// const singletonObject = new object();
const tinderuser={};

tinderuser.id='12345';
tinderuser.name="sam";
tinderuser.islogedin=false;

// console.log(tinderuser);

// we can do nesting in the objects 
const regularuser={
    emil:"vishal@google.com",
    fullname:{
        userfullname:{
            firstname:"sam",
            lastname:"sulake",
        }
    }
}
// console.log(regularuser);
//if we want to access any thing we can do it like this .
// console.log(regularuser.fullname.userfullname.firstname);

// and if we have a huge nested objects we can simple arrage it like this .
// this is how we add objects .
const obj3 = {...tinderuser,...regularuser};
// console.log(obj3);

// there is one more way to add other objects to one is .
const object1 = {1:"b" , 4:"c"  }
const object2 = {2:"b" , 3:"c"  }
const object3 = Object.assign({},object1,object2);
// console.log(object3);


// we can get all the key and object from an object like this .
// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));

// TO CAHECK IF THE OBJECT CONTAINS     
// console.log(tinderuser.hasOwnProperty('islogedin'));


const course={
    courcename:"java script",
    courcePrice:"999",
    courceInstructor:"vishal sharma "
}

// we we are writing a key many time then we can do this to simplify it 
const{courceInstructor} = course; // like this 
console.log(courceInstructor); 

// and if we want to make it even more smaller we can do this .
const{courceInstructor : teacher} = course; // like this 
console.log(teacher);