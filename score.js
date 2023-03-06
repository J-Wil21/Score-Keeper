const homeBtn = document.getElementById('home');
const awayBtn = document.getElementById('away');
const resetBtn = document.getElementById('reset');
const hScore = document.getElementById('homeScore');
const aScore = document.getElementById('awayScore');
const num5 = document.getElementById('inlineRadio1');
const num6 = document.getElementById('inlineRadio2');
const num7 = document.getElementById('inlineRadio3');
const num8 = document.getElementById('inlineRadio4');
const scoreTarget = document.getElementById('num')

// let sel = false; 
let h = 0;
let a = 0;


homeBtn.addEventListener('click',home)
awayBtn.addEventListener('click',away)
resetBtn.addEventListener('click',reset)

num5.addEventListener('input', () => {
    scoreTarget.innerText = num5.value;
})

num6.addEventListener('input', () => {
    scoreTarget.innerText = num6.value;
})

num7.addEventListener('input', () => {
    scoreTarget.innerText = num7.value;
})

num8.addEventListener('input', () => {
    scoreTarget.innerText = num8.value;
})

    
    
function home() {
    h++
    hScore.innerText = h;
    console.log(num5.value)
    if (h === 5 && num5.checked === true ) {
        homeWin()
    } else if (h === 6 && num6.checked === true) {
        homeWin()
    } else if (h === 7 && num7.checked === true) {
        homeWin()
    } else if (h === 8 && num8.checked === true) {
        homeWin()
    // } else if (!(sel)) {
    //     window.alert('Select a number FOOL!!');
    //     a = 0
    //     aScore.innerText = 0;
    } else {
        null
    } 
        
    
}

function away() {
        a++
     aScore.innerText = a;
    console.log(a)
     if (a === 5 && num5.checked === true) {
        awayWin()
       
     } else if (a === 6 && num6.checked === true) {
        awayWin()
     } else if (a === 7 && num7.checked === true) {
        awayWin()
 
     } else if (a === 8 && num8.checked === true) {
        awayWin()
    //  }  else if (!(sel)) {
    //     window.alert('Select a number FOOL!!');
    //     a = 0
    //     aScore.innerText = 0;
    } else {
         null
     }
 }

function reset() {
    h = 0;
    a = 0;
    hScore.innerText = 0;
    aScore.innerText = 0;
    homeBtn.disabled = false;
    awayBtn.disabled = false;
    hScore.style.color = 'black';
    aScore.style.color = 'black';
}

function awayWin() {
        hScore.style.color = 'red';
        aScore.style.color = 'green';
        homeBtn.disabled = true;
        awayBtn.disabled = true;
        h = 0;
        a = 0;
}

function homeWin() {
        hScore.style.color = 'green';
        aScore.style.color = 'red';
        homeBtn.disabled = true;
        awayBtn.disabled = true;
        h = 0;
        a = 0;
}

// const option = document.getElementsByName('inlineRadioOptions');

// for (let i = 0; i < option.length; i++) {
//     if (option[i].checked) {
//         sel = true;
//         break;
//     } 
// }