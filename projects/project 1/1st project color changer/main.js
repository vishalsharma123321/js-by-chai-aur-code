const color = document.querySelectorAll('.button');
const body = document.querySelector('body')

color.forEach(  (buttons) =>
    buttons.addEventListener('click',function(e){
      if (e.target.id===e.target.id){
        body.style.backgroundColor=`${e.target.id}`
      }
    })
  )