const form=document.querySelector('form');
// console.log(from)
form.addEventListener('submit', (s) => {
s.preventDefault();

const height = parseInt(document.querySelector('#height').value);
const weight = parseInt(document.querySelector('#weight').value);
const result = document.querySelector('#results');

if(height==='' || height<0 || isNaN(height)){
  result.innerHTML='please enter a valid height ';
}
else if(weight ===''|| weight<0 || isNaN(weight)){
  result.innerHTML="plesase enter a valid weight ";
} else{
  const bmi = (weight/((height*height)/10000)).toFixed(2)
  result.innerHTML= `<span>${bmi}</span>`

  if(bmi<18.6){
    result.appendChild(document.createTextNode(" underwight"))
  }
  else if(bmi<24.9){
    result.appendChild(document.createTextNode(" normal weight "))  }else{
      result.appendChild(document.createTextNode(" overweight "))  }
  
}

} )