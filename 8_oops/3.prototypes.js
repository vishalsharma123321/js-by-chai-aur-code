const myheros = ["thor","spiderman","batman"];
// console.log(myheros);
// console.log(myheros[0].length);

let heropower = {
    thor:"hammer",
    spiderman : "sling",
    getspiderpower:function(){
        console.log("spider webs ");
    }
}

// console.log(heropower.getspiderpower());

// ok what if we to creat a function can be used by any one like the below vishalpowers()
// console.log(heropower.vishalpowers()); 
// now this wont work because we hav'nt created it now

// to creat this we have to creat it in the  prototype of the  objects beacuse object is at the top and if even creat any thing 
// in the prototype then it can be accessed by any one 

// this is how we creat a function in te object 
Object.prototype.vishalpowers = function(){
    console.log("The creator -----> The pape The GOD");
}

console.log(heropower.vishalpowers()) // this will work 

// we can now use this function anywhere 
// like in the above created array . 

console.log(myheros.vishalpowers());

// now this power can be used by any one but waht if we want to creat a function only for the arry

// this is how we can creat afunction olny for the arrays 
Array.prototype.superman = function(){
    console.log(" super man is the best ");
}
console.log(myheros.superman());
// console.log(heropower.superman()); // this wont have the function of the arrays .


// inheritance

const user = {
    name:'vishal ',
    gmail:"vishalsharma@gmial.com"
}
 
const teacher ={
    makevideo:true,
}
const teachingSupport = {
    isAvailable : false
}

const Tasupport = {
    mkaeAssignment:'js assignement',
    fullTime:true,
    // before the new syntex the __proto__ syntex was used like this to inheritate the properties of the teaching support  by the TAsupport
    __proto_:teachingSupport
}

// the new syntext for to inheritate the poperties of other is like  object.isPrororypeOf() like below we have used 
Object.setPrototypeOf(teachingSupport,teacher); // in this teachingSupport can have the properites of the Teacher 

// ok now lets come to the assignment we have to to creat method which we give us the lenght of the string 
// like we use the .length but what if the string is like this (   vishal    )  tje .lenght will count the spaces also 
// and we also dont want to usne the .trim method 

// ok lets creat 

String.prototype.trueLenght = function(){
    console.log(this);
    console.log(`the true length is ${this.trim().length}`);
}

const anotherusername = "   deathpul   "
console.log(anotherusername.trueLenght());

// we canlso we it like this 
"vishalsharma".trueLenght()
"wnengononvom   wfgmpgwmepo mw egpgm".trueLenght()




















