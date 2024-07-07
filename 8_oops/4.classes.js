
// this is how we creat classes and constructors 
// class user {
//     constructor(name,email,password){
//         this.name=name
//         this.email=email
//         this.password=password
//     }

//      encryptpassword() {
//         console.log(`${this.password}absjbf`);
//     }

//     changename(){
//         console.log(`${this.name.toUpperCase()}`);
//     }
// }


// const user1 = new user("vishals sharma","vishalsharma2212003@gmial.com",12345);
// console.log(user1.encryptpassword());
// console.log(user1.changename());



// behind the scen of the classes

function user(name,email,password){
    this.name=name;
    this.email=email;
    this.password=password;
}

user.prototype.encryptpassword=function(){
    console.log(`${this.password}absjbf`);
}
user.prototype.changename=function(){
    console.log(`${this.name.toUpperCase()}`);
}

const user1 = new user("tony","tony.gmial.com",123456);
console.log(user1);
console.log(user1.changename());
console.log(user1.encryptpassword());




