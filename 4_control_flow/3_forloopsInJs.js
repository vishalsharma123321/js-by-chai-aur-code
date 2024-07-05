// first we have normal for loops we all know 
// syntax for the normal for loop :
for( let i=0 ; i<=10 ; i++){
    // console.log(i);
}

// lets see some special for loops in js .

// console.log("for of loop in js on arr ");
// lets like special for loop in java but at the place of  : us use of .

// example of the for of loop 
const numbers=[1,2,89,9];

for( number of numbers){
    // console.log(number);
}

// it can work also on simple string arrs and maps

// console.log();
// console.log("for of loop in strings ");
const names = "tony stark";
for(char of names){
    // console.log(char);
}

// console.log();
// lets see how we creat map in js (map holds key value pairs )
// console.log("map in js (maps hold key value pairs and key are not repeted )");


const map = new Map()
map.set('in', "india");
map.set("us", "united states of America ");
map.set(1, " vishal Sharma");
map.set('2', "tony stark ");


// ok lets see how we can use the for of loops in the maps .
for([keys,values] of map){

    // console.log(`${keys} ==>  ${values}`);
    // console.log(values);  // for values we can use this .  
    // console.log(keys);  // for keys we can use this .
}

// ################ we can not us the for of on objects we need to use the for in for the objects but we can not us the for in for map 
// console.log("for in loops in js ");

// lets creat an object 
const student = {
    name : "tony stark ",
    age :"21",
    branch : "cse",
    gmail : "tonystark@gmail.com"
}

for(const keys in student){
    // console.log(keys);
// console.log(student.keys); // this wont work becuse the student will try tofind any key name keys in the object 
// console.log(student[keys]); // this will work becasue in the keys we have the key of the students and it will itreat like arr in the studnts 
                            // student["keys"] this will also wont work because its again looking for a key named keys .
}

// lets us the for in loop in the arrys 
const arr=[1,2,3,4,5,6];
for(const num in arr){
    // console.log(arr[num]);
}

// for in loop in a string 
const pape= "pape the god";
for (const char in pape) {
    console.log(pape[char]);
}







