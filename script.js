'use strict';

// Declaring button's variables

const rollDiceBtn = document.querySelector('.roll-dice-btn');
const newGameBtn = document.querySelector('.new-game-btn');
const holdBtn = document.querySelector('.hold-btn');

// Declaring values's variables

let turn = 1;
let currentScore = 0;
const diceImage = document.querySelector('.dice-image');
const player1 ={
    score: 0,
    scoreDOM: document.querySelector('.score-player1'),
    current: document.querySelector('.current-player1'),
    style: document.querySelector('.player--1')
}
const player2 ={
    score: 0,
    scoreDOM: document.querySelector('.score-player2'),
    current: document.querySelector('.current-player2'),
    style: document.querySelector('.player--2')
}
// initial values :
let playing = true;
let currentPlayer = player1;
diceImage.classList.add('hidden');

// declaring functions

const changePlayer = function(){
    currentScore = 0;
    if (turn === 1){
        turn = 2;
        currentPlayer = player2;
        player1.current.textContent = 0;
    } else {
        turn = 1;
        currentPlayer = player1;
        player2.current.textContent = 0;
    }
}
const changeTurn = function(){ // change turn function
    if (playing){
        changePlayer();
        player1.style.classList.toggle('selected');
        player2.style.classList.toggle('selected');    
    }
    
}

const intitialise = function(){
    playing = true;
    currentPlayer.style.classList.remove('winner');
    currentScore = 0;
    player1.score = 0;
    player2.score = 0;
    player1.scoreDOM.textContent = 0;
    player2.scoreDOM.textContent = 0;
    player1.current.textContent = 0;
    player2.current.textContent = 0;
    if (turn === 2){
        changePlayer();
    }
    player1.style.classList.add('selected');
    player2.style.classList.remove('selected');
    diceImage.classList.add('hidden');
}


const rollDice = function(){ // roll dice function

    if (playing){
        const diceFace = Math.trunc(Math.random() * 5) + 1;
        diceImage.src = `icons/dice-face-${diceFace}.png`;
        diceImage.classList.remove('hidden');
        if (diceFace !== 1){
            currentScore += diceFace;
            currentPlayer.current.textContent = currentScore;
        }
        else{
            changeTurn();
        }
    }
}
const holdValues = function(){
    currentPlayer.score += currentScore;
    currentPlayer.scoreDOM.textContent = currentPlayer.score;
    if (currentPlayer.score >= 100){
        diceImage.classList.add('hidden');
        currentPlayer.style.classList.add('winner');
        currentPlayer.style.classList.remove('selected');
        playing = false;
    }
    changeTurn();
}
// assigning functions to buttons

rollDiceBtn.addEventListener('click', rollDice);
holdBtn.addEventListener('click', holdValues);
newGameBtn.addEventListener('click', intitialise);

// Experiences

function test (){
    const variable  = 0;
    return 10 + variable;
}
// console.log(variable);