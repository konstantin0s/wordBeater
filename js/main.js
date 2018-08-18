window.addEventListener('load', init);

//global variables
let time = 5;
let score = 0;
let isPlaying;

//dom element variables
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplat = document.querySelector('time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = [
  'hat',
'river',
'lucky',
'statue',
'generate',
'stubborn',
'cocktail',
'runaway',
'joke',
'developer',
'establishment',
'hero',
'javascript',
'nutrition',
'revolver',
'echo',
'siblings',
'investigate',
'horrendous',
'symptom',
'laughter',
'magic',
'master',
'space',
'definition'
];

// Initialize game
function init() {
  // Load word from array
  showWord(words);
}

//pick random word
function showWord(words) {
  const randIndex = Math.floor(Math.random() * words.length);
  // Output a random words
  currentWord.innerHTML = words[randIndex];
}
