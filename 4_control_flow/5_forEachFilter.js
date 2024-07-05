// lets see if the forEach loops does return any thing .
const coding = ["js","ruby","java","python","cpp"]

const values = coding.forEach( (inteam)=>{
// console.log(inteam);
return inteam;
} )

// console.log(values);  // it didnt returned undefined and just printed the logs 

// lets see how we can filter or get return value in  the forEach loops.
const myNums=[1,2,3,4,5,6,7,8,9,10]
// const newNums = myNums.filter( (num)=> (num>5) )   // this use the use and the syntex for the filter 
// console.log(newNums);

// const newNums = myNums.filter( (num)=> { return num>5} )   // always rember to add return statement when using {} or it wont work 
// const newNums = myNums.filter( (num)=> num>5 )   // we can also write it without using the parentheses () after the => 


// if we dont want the filer than we can creat a new array and store the numbers in it 
const arr = [];
myNums.forEach( (num)=>{
    if(num>5){
        arr.push(num);  // like this  
    }
}  )
// console.log(arr);


// ok lets see how we can use the filter in the objects and real word 
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userbook = books.filter( (bk) => bk.genre=="Fiction" )
  userbook = books.filter( (bk)=>{ return bk.publish>=2000} ) // alwas rember to add return in the scope {}
  userbook =books.filter( (bk)=> bk.genre=='Science' && (bk.publish>=1980 && bk.publish<=2010) );
  console.log(userbook);



