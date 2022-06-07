'use strict';
//proof of life consol log
console.log('SUP');

//This program has a counter for the right questions guessed 'correct'

//intro prompt... Their name will be repopulated throughout the program.
//Throughout the program I use `` and ${} to format my code.  
let questionName = prompt('What is your name?');
// alert refrences the previous propt.
alert(`Bievenidos ${questionName}! You are going to answer some questions.`);

let AnswerCorrect = 0;

//First question...  
//Added tolowarCase() for the sake of application ease. This will be throughout the program
let questionSpanish = prompt(`Can Marcus speak Spanish?`).toLowerCase();

if (questionSpanish === 'yes' || 'y') {
    alert(`correct`);
    AnswerCorrect++;
} else if (questionSpanish === 'no' || 'n') {
    alert(`incorrect`);
}

//Second question
let questionView = prompt(`${questionName},Does Marcus have a place with a view?`).toLowerCase();

if (questionView === 'yes' || 'y'){
    alert('correct');
    AnswerCorrect++;
} else if (questionView === 'no' || 'n'){
    alert ('incorrect');
}

//Third question
let questionDog = prompt('Does Marcus have a dog?').toLowerCase();

if (questionDog === 'yes' || 'y'){
    alert('correct');
    AnswerCorrect++;
} else if (questionDog === 'no' || 'n'){
    alert ('incorrect');
}

//Fourth question
let questionWedding = prompt('Did Marcus get married in Seattle?').toLowerCase();

if (questionWedding === 'yes' || 'y'){
    alert('incorrect');
} else if (questionWedding === 'no' || 'n'){
    alert ('correct');
    AnswerCorrect++;
}

//Fith question
let questionCode = prompt('Did Marcus enjoy writing all this code?').toLowerCase();

if (questionCode === 'yes' || 'y'){
    alert('correct');
    AnswerCorrect++;
} else if (questionCode === 'no' || 'n'){
    alert ('incorrect');
}

//Sixth question is a FOR LOOP 
//The ser has 4 attempts.

function questionNumber(){
    for(let i = 0; i < 4; i++){
    //let correctNumber = 10;
    let userResponse = prompt(`${questionName}, guess a number between 1-10.`);
    if (userResponse == 10){
        alert('correct');
        AnswerCorrect++;
    //Alert if too low. 
    } else if (userResponse < 10){
        alert('Go higher')
    //Alert if too high.
    } else if (userResponse > 10 ) {
        alert ('The number you selected is TOO DAMN HIGH!')
    }
    }//After all attempths have been exhausted, tell the user the correct answer.
}
alert (`the correct number is ${correctNumber}.`);

//Reinstantiate the users name
alert(`enjoy my site ${questionName}`);

questionNumber();

