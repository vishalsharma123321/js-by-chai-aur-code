// const stop =document.querySelector('#stop')

// const colors = function() {
//     let i = 100;
//     let color = "";
//     while (i < 120) {
//       i++;
//       color += (Math.floor(Math.random() * 16)).toString(16); // Generating a random hex digit
//     }
//     return color.substring(0, 6); // Ensure it's a 6-digit hex code
//   }

//   const body = document.querySelector('body');
//   const start = document.getElementById('start');

//   start.addEventListener('click', function() {
//     const interval = setInterval(function() {
//       body.style.backgroundColor = `#${colors()}`;
//     }, 500);

//     stop.addEventListener('click',function(){
//         clearInterval(interval)
//     })
//   });

const randomcolor = function () {
    const hex = '1234567809abcdnf'
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += hex[Math.round(Math.random() * 16)];
    }
    console.log(color);
    return color
}

const start = document.querySelector('#start')
const stop = document.querySelector('#stop')

let interval = null;
start.addEventListener('click', () => {
    if (interval === null) {
        interval = setInterval(function () {
            document.body.style.backgroundColor = randomcolor();
        }, 500);
    }
});
stop.addEventListener('click', () => {
    clearInterval(interval)
    interval = null;
});









