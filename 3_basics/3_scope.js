// why we should not use var 

var c=300 // this value will be updated int the if block and we will get 30 thats why we dont use var.

if(true){
    // const a=10;
    // let b=20;
     c=30;
}
// console.log(a); // a which is const won't print beacuse its not a globlal element  
// console.log(b); // b will also wont work because it's not a global element .
// console.log(c); // c will work which is var because its a global element .


// lets see how the scope works in the nesting
// in the nested loops always rember the concept of child can take the ice-cream from the father but father can not take icream from the child  
// in other words we can say that inner fuction can acces the out side function but the out side can not acces the inner function .
function one(){
    const name = "tony";
    function two(){
        console.log(name);   // here two can access the elements from the one klije the name 
        const website = "tony.com" 
    }
    // console.log(website); // but here one can not access the elements from the two and we will get the error 
    two(); // here we will get the tony  
}

one();

// copes of declaration of the function means how we can decler the function and can access it in diffrent ways .

// here we have created a simple function and we can acces it before initialization of the function and it will work. 
console.log(addone(5));
function addone(number){
    return number +1
}

//             #########the veriable are very powerful in js they can store anything . 

// now lets make a function and store but it will only works after the function is decleared not before the function is decleared 
// addtwo(5); // we we declare it here it wont work . we need to decler it after the function .
const addtwo=function(num){
return num+2;
}

console.log(addtwo(5));