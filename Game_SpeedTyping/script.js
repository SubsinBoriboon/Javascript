const word = document.getElementById('word');
const text = document.getElementById('text');
const score = document.getElementById('score');
const time = document.getElementById('time');
const btnlevel = document.getElementById('level-btn');
const setting = document.getElementById('setting');
const levelForm = document.getElementById('level-form');
const level = document.getElementById('level');
const gameOver = document.getElementById('gameOver');

const wordData = ['astronaut', 'politics', 'combusionengine', 'Argentina'];

let randomWord;
let scoreboard = 0;
let timeboard = 15; //easy =15s,medium=10s,hard=5s

const timeInterval = setInterval(updateTime, 1000);

let stepLevel = 'medium';

text.addEventListener('input', (e) => {
  const inputText = e.target.value;
  if (inputText === randomWord) {
    displayWord();
    e.target.value = '';
    displayScore();
  }
});

function getRandomWord() {
  return wordData[Math.floor(Math.random() * wordData.length)];
}

function displayWord() {
  randomWord = getRandomWord();
  word.innerHTML = randomWord;
  time.innerHTML = timeboard;
}
function displayScore() {
  scoreboard += 10;
  score.innerHTML = scoreboard;
}
function timeOut() {
  gameOver.style.display = 'flex';
  gameOver.innerHTML = `
  <h2>TimeOut!!</h2>
  <p id='mode'>Mode: ${localStorage.getItem('mode')}</p>
  <p id='finalscore'>Your score = ${scoreboard}</p>
  <button id='restart' onclick='location.reload()'>restart</button>
  `;
}
function updateTime() {
  timeboard--;
  time.innerHTML = timeboard;
  if (timeboard == 0) {
    clearInterval;
    timeOut();
  }
}
btnlevel.addEventListener('click', () => {
  //สลับclass ที่ชื่อhide
  setting.classList.toggle('hide');
});
level.addEventListener('change', (e) => {
  stepLevel = e.target.value;
  localStorage.setItem('mode', stepLevel);
  location.reload();
});

function startGame() {
  const saveMode =
    localStorage.getItem('mode') !== null
      ? localStorage.getItem('mode')
      : 'medium';
  level.value = saveMode;

  if (saveMode === 'easy') {
    timeboard = 15;
  } else if (saveMode === 'medium') {
    timeboard = 10;
  } else {
    timeboard = 5;
  }
  displayWord();
}
startGame();
displayWord();
text.focus();
