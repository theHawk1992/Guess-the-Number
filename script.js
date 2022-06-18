'use strict';

let score = 20;
let secretNumber = Math.trunc(Math.random() * 20)+ 1;

document.querySelector('.check').addEventListener('click', function (){
    let guess = Number(document.querySelector('.guess').value);
    
    // when there is no input
    if (!guess) {
        document.querySelector('.message').textContent = 'No Number!';
    // when Winning
    }else if (guess === secretNumber){
        document.querySelector('.message').textContent = 'Correct Number!';
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;


    }else if (guess > secretNumber){
        if (score > 1) {
           document.querySelector('.message').textContent = 'Too High';
        score = score -1;
        document.querySelector('.score').textContent = score; 
        }else{
           document.querySelector('.message').textContent = 'You lost the Game!';
            document.querySelector('.score').textContent = 0; 
        }
    }else if (guess < secretNumber) {
        if (score > 1){
               document.querySelector('.message').textContent = 'Too Low!';
                score = score -1;
                document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContent = 'You lost the Game!';
            document.querySelector('.score').textContent = 0; 
        }
    }
});

document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    document.querySelector('.score').textContent = '20';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';    
    secretNumber = Math.trunc(Math.random() * 20)+ 1;
    document.querySelector('.guess').value = '';

})

   