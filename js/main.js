const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const rock = document.querySelector('#rock');

const you_score = document.querySelector('#you-score');
const ren_score = document.querySelector('#ren-score');

const btn = document.querySelector('.btn');
const con_box = document.querySelector('.pley__con-box');
const rock_pley = document.querySelector('.rock__pley');
const rock_pley_two = document.querySelector('.rock__pley-two');

const item1 = document.querySelector('#imgg-one');
const item2 = document.querySelector('#imgg-two');
const text = document.querySelector('#text');

let pleyPaper = 'paper';
let pleyscissors = 'scissors';
let pleyrock = 'rock';

let you = '';
let rendom = '';

let y_scr = 0;
let r_scr = 0;

function renNum() {
  let ren = Math.random().toFixed(1);

  if (ren >= 0.0 && ren < 0.4) {
    return pleyPaper;
  }
  if (ren > 0.3 && ren < 0.7) {
    return pleyscissors;
  }
  if (ren > 0.6 && ren <= 1.0) {
    return pleyrock;
  }
}
rendom = renNum();

function pleyRelus(a, b) {
  if (a == 'paper' && b == 'rock') {
    item1.className = 'paper-img';
    item2.className = 'rock-img';

    con_box.classList.add('d-flex');
    y_scr++;
    you_score.textContent = y_scr;
    text.textContent = 'You win';
  }

  else if (a == 'scissors' && b == 'paper') {
    item1.className = 'scissors-img';
    item2.className = 'paper-img';

    con_box.classList.add('d-flex');
    y_scr++;
    you_score.textContent = y_scr;
    text.textContent = 'You win';
  }

  else if (a == 'rock' && b == 'scissors') {
    item1.className = 'rock-img';
    item2.className = 'scissors-img';

    con_box.classList.add('d-flex');
    y_scr++;
    you_score.textContent = y_scr;
    text.textContent = 'You win';
  }

  else if (a == 'paper' && b == 'scissors') {
    item1.className = 'paper-img';
    item2.className = 'scissors-img';
    con_box.classList.add('d-flex');

    r_scr++;
    ren_score.textContent = r_scr;
    text.textContent = 'You lose';
  }

  else if (a == 'scissors' && b == 'rock') {
    item1.className = 'scissors-img';
    item2.className = 'rock-img';
    con_box.classList.add('d-flex');

    r_scr++;
    ren_score.textContent = r_scr;
    text.textContent = 'You lose';
  }

  else if (a == 'rock' && b == 'paper') {
    item1.className = 'rock-img';
    item2.className = 'paper-img';
    con_box.classList.add('d-flex');

    r_scr++;
    ren_score.textContent = r_scr;
    text.textContent = 'You lose';
  }

  else if (a == 'paper' && b == 'paper') {
    item1.className = 'paper-img';
    item2.className = 'paper-img';

    con_box.classList.add('d-flex');
    text.textContent = 'Draw';
  }

  else if (a == 'scissors' && b == 'scissors') {
    item1.className = 'scissors-img';
    item2.className = 'scissors-img';

    con_box.classList.add('d-flex');
    text.textContent = 'Draw';
  }

  else if (a == 'rock' && b == 'rock') {
    item1.className = 'rock-img';
    item2.className = 'rock-img';

    con_box.classList.add('d-flex');
    text.textContent = 'Draw';
  }
  WINandLOSE();
}

function WINandLOSE() {
  if (y_scr == 5) {
    alert('Your score is 5, YOU WIN!');
    y_scr = 0;
    r_scr = 0;
    you_score.textContent = y_scr;
    ren_score.textContent = r_scr;
  } else if (r_scr == 5) {
    alert('Your score is 5, YOU LOSE!');
    y_scr = 0;
    r_scr = 0;
    you_score.textContent = y_scr;
    ren_score.textContent = r_scr;
  }
}

paper.addEventListener('click', () => {
  you = pleyPaper;
  rock_pley.className = 'd-none';
  rock_pley_two.className = "rock__pley-two d-flex flex-wrap justify-content-between";
  pleyRelus(you, rendom);
})

scissors.addEventListener('click', () => {
  you = pleyscissors;
  rock_pley.className = 'd-none';
  rock_pley_two.className = "rock__pley-two d-flex flex-wrap justify-content-between";
  pleyRelus(you, rendom);
})

rock.addEventListener('click', () => {
  you = pleyrock;
  rock_pley.className = 'd-none';
  rock_pley_two.className = "rock__pley-two d-flex flex-wrap justify-content-between";
  pleyRelus(you, rendom);
})

btn.addEventListener('click', () => {
  rock_pley.className = "rock__pley d-flex flex-wrap justify-content-around";
  rock_pley_two.className = "d-none";

  rendom = renNum();
})