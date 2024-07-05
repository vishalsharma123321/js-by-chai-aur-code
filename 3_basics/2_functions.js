// lets say we are designing a shooping cart and we dont know how many iteams will be added by the user then what will do 
// to take that many iteams we will use the ...(three dots known as spread operation ).

function shopinCart(...iteam1){  // to take every iteams we will use the ... and the name of the argument .
    return iteam1;
}
//console.log(shopinCart(100,200,300,400)); // for example here we have add mmany iteams and we can add more 
// this how we get the return type [ 100, 200, 300, 400 ] 

// and what if we have iteam3,iteam3,iteam1 then how we will get the output using the spread operations .
function shopinCart(iteam3,iteam2,...iteam1){  // to take every iteams we will use the ... and the name of the argument .
    return iteam1;
}
// here it will take the first two values as iteam 3 and second for iteam 2 and rest values will be printed as iteam 3 .
//console.log(shopinCart(100,200,300,400,500,600)); // out put [ 300, 400, 500, 600 ] , there is no 100 and 200 because we have returned iteam1 .





// how we can use the objects in the functions .
const user ={
    name:"vishal sahrma ",
    breanch:"Btech cse 4th year "
}

// this is how we can use the objects in the functions .
function useOfObject(object){
    return `i there ${object.name} you are in ${object.breanch}`
}
// console.log(useOfObject(user));


// we can also creat a direct object in the function parameters whill passing it into the function.
// function creatingObjectInTheFunction(object){
// console.log(`your real name is ${object.username} and you are the real ${object.superhero}`);
// }
// creatingObjectInTheFunction({
//     username:"tony stark",
//     superhero:"ironman",
// })

// we can do this in both this way .
function creatingObjectInTheFunction(object){
    return `your real name is ${object.username} and you are the real ${object.superhero}`;
    }
    // console.log( creatingObjectInTheFunction({
    //     username:"vishal ",
    //     superhero:"thor ",
    // }));


// how to use arrys in the functions 
function arrys(arr){
    return arr[1];
}
console.log(arrys([1000,2000,3000]));






















