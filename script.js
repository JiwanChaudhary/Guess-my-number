'use strict';

// generate random number between 1 and 20
let secretNumber = Math.trunc(Math.random()*20)+1;
// document.querySelector('.number').textContent = secretNumber;

//initial score is set to 20 which is also highScore
let score = 20;
let highScore = 0;

//adding event listner
document.querySelector('.check').addEventListener('click', function() {
    let guess = Number(document.querySelector('.guess').value);
    // console.log(guess, typeof guess);

    //if there is no guess
    if(!guess) {
        document.querySelector('.message').textContent = "⛔ No Number";
    } 
    //if the guess is greater than secret number
    else if(guess > secretNumber) {
        if(score > 1) {
            document.querySelector('.message').textContent = "📈 Too high!";
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = "💥 You lost the game!";
            document.querySelector('.score').textContent = 0;
        }
    }
    
    //if the guess is smaller than secret number
    else if(guess < secretNumber) {
        if(score > 1) {
            document.querySelector('.message').textContent = "📉 Too low!";
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = "💥 You lost the game!";
            document.querySelector('.score').textContent = 0;
        }

    } 
    
    // if secret number is equal to guess
    else if(guess === secretNumber) {
        document.querySelector('.message').textContent = "🎉 Correct Number!";
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.main').style = 'background-color: green;';
        document.querySelector('.made-by').style = 'background-color: green;';
        document.querySelector('.number').style = 'width: 100px;';

        if(score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = score;
        }
    }
}); 


//again event listner
document.querySelector('.again').addEventListener('click', function() {

    score = 20;
    secretNumber = Math.trunc(Math.random()*20)+1;
    
    document.querySelector('.message').textContent = "Start Guessing...";
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    
    document.querySelector('.main').style.backgroundColor = 'black';
    document.querySelector('.made-by').style.backgroundColor = 'black';
    document.querySelector('.number').style.width = '60px';

});
