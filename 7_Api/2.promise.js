const promise1 = new Promise(function (resolve, reject) {
    // can perform an async task
    // DataBase calls, cryptography , network
    setTimeout(function () {
        // console.log("Async task is completed ");
        resolve()
    })
})

promise1.then(function () {
    // console.log("Promise consumed");
})

// we can also write it like this 
new Promise(function (resolve, reject) {
    setTimeout(() => {
        // console.log("Async task 2 is resloved ");
        resolve()
    }, 1000);
}).then(function () {
    // console.log("Async 2 is resolved ");
})


const promise3 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({
            name: "tony stark",
            age: 30,
            emial: "tonystark@gmail.com"
        })
    }, 1000)
}).then(function (userdatafromresolve) {
    // console.log(userdatafromresolve);
})


const promise4 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ name: "vishal sahrma ", university: "shooliniuniversity" })
        } else {
            reject("error someting went wrong ")
        }
    }, 1000)

})
promise4
    .then(function (userinfo) {
        console.log(userinfo);
        console.log(userinfo.name);
        return userinfo.university;
    })
    .then(function (useruniversity) {
        console.log(useruniversity);
    })
    .catch(function (error) {
        // console.log(error);
    })
    // .finally(()=> console.log(" the promise is either resolved or rejected "))


// const promise5 = new Promise(function(resolve,reject){
//     setTimeout(function () {
//         let error = true;
//         if (!error) {
//             resolve({ name: "tony sahrma ", university: "shooliniuniversity" })
//         } else {
//             reject("error someting went wrong with the promise5 ")
//         }
//     }, 1000)
// })

// async function consumepromise5(){
//     try{
//       const response= await promise5;
//       console.log(promise5);
//     }catch(error){
//         console.log(error);
//     }
// }

// consumepromise5();


// async function fechapi(){
//     try{
//        const response= await fetch('https://jsonplaceholder.typicode.com/users');
//          const data =  await response.json();
//          console.log(data);
//     }catch(error ){
//         console.log('E:',error);
//     }
// }

// fechapi();

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
   return  response.json()
}).then((response)=>{
    console.log(response);
}).catch((error)=>console.log(error))


































