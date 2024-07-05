// functions 
// how to make a fuction 
function print(){
    console.log("i there iam a noral non returning function : ");
}

print();

// this is a return type fuction the fuctions values can be stored in a veriables also .

function reTurnTypeFuction(num1,num2){
    return num1+num2;
}
console.log(reTurnTypeFuction(2,5));


// if input is undefined what to do .
function userGreating(username){
    return `wellcome ${username} nice to see you `;
}
console.log(userGreating("vishal sharma")); // here ww have given the paramenters argument 
// what if some don't gives how we will handels it 

function withoutArgument(username){

    if(username===undefined){
        return `please enter a valid user name`
    }
    return `wellcome ${username} nice to see you `;
}
console.log(withoutArgument());  // whe we run the code it will show please enter a valid user name .

//we can also predefine the value of the argument is some dont enter the value for the paramenters .
function predefinedValueInTheAruguments(username="vishal sharma "){

    if(username===undefined){
        return `please enter a valid user name`
    }
    return `wellcome ${username} nice to see you `;
}
console.log(predefinedValueInTheAruguments()); //if some ine dont enters any names then it will show my pre assigned name ; 