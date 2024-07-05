const marvel = ["thor","ironman","spiderman"];
const dc = ["batman","superman","wonderwoman"];


// marvel.push(dc);  // push will just add the dc array as arry in the marvel note it wont add the iteams it will add the full array it self 
// console.log(marvel);
// console.log(marvel[3]);


// concat
// const marvelDC=marvel.concat(dc); // concat works properly to add the elements to the new array .
// console.log(marvelDC);

// spread it also works to add element .
// const newHeros = [...marvel,...dc];
// console.log(newHeros);


// flat just make a complicated arry simple .
const newarr=[1,2,3,[4,5,6],7,[8,4,5,[3,2]]];
const anotherarr=newarr.flat(Infinity);
console.log(newarr);
console.log(anotherarr);


// to check if its array or not or /// also a convert it into array .
console.log(Array.isArray("vishal sahrma"));
console.log(Array.from("vishal sharma "));
console.log(Array.from("vishal sharma "));

const myname="tony";
console.log(Array.from(myname));
console.log(Array.from({name: "rani"}));  // it wont work on this .

// we can also use of 
const score2 = 100;
const score3 = 200; 
const score4 = 300;

console.log(Array.of(score2,score3,score4)); // like this 