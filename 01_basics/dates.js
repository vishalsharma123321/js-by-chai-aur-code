const mydate = new Date();
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toLocaleString());
// console.log(typeof mydate);

const mycreateddate = new Date(2003,0,22);
const mycreateddateWithHours = new Date(2003,0,22,4,30);
console.log(mycreateddate.toLocaleDateString()); 
console.log(mycreateddateWithHours.toLocaleString());

const excetdate = Date.now();
console.log(excetdate);
console.log(mydate.getTime());
console.log(excetdate.toLocaleString());

// to convert date to seconds 
console.log(Date.now()/1000);
console.log(Math.floor(Date.now()/1000));




const newdate = new Date();
console.log(newdate.getDay());
console.log(newdate.getFullYear());
console.log(newdate.getDate());
console.log(newdate.getMonth()+1);
newdate.toLocaleString('default',{
    weekday: "long"
})

