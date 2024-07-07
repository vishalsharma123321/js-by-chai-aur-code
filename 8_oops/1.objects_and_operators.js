// this is how we creat a object 
const user =  {
    myname : 'vishal ',
    brach:' betach ',
    gmail:'vishalsharma2@shooliniuniversity.com',
    thisfunction (){
        // console.log(this.myname);
        // console.log(this);
    },
    greatings (){
        // console.log(`hi ${this.myname} you are wellcome`);
    }
}
// console.log(user.thisfunction());
// console.log(user.greatings());
// // console.log(user.gmail);
// // console.log(this);


// lets creat an operator 
  function operator (myname, id , phonenmber){
    this.myname=myname;
    this.id=id;
    this.phonenmber=phonenmber;
 }

const user1 = new operator('vishal sahrma ',1234,9049629997);
// console.log(user1);
// console.log(user1.phonenmber);

// all ways use to creat new refarence of the opjects like we have used new in the user 1 .

// whast happens when we dont use the new to creat new refarnce of the object ;
const user2 =  operator('swara',6234 , 92472873952);
console.log(user2);
// it will show undefined








