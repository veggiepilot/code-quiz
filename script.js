 
// Start the quiz when the start button is clicked
var startGame    = document.getElementById('game-start');
var timeEl       = document.getElementById('timer');
var quizHeading  = document.getElementById('quiz-heading');
var quizQuestion = document.getElementById('quiz-question');
var answerList   = document.getElementById('answer-list');
var secondsLeft  = 60;
var ul           = document.getElementById('answer-list');



// Question bank objects in an array
var questionBank = [
    {
        question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
        answers: ["<script name='xxx.js'>", "<script href='xxx.js'>", "<script src='xxx.js'>"],
        correctAnswer: "<script src='xxx.js'>",
        answered: 'no'
    }, 
    {
        question: "How do you write 'Hello World' in an alert box?",
        answers: ["alertBox('Hello World')", "alert('Hello World')", "msg('Hello World')"],
        correctAnswer: "alert('Hello World')",
        answered: 'no'
    }, 
    {
        question: "How do you create a function in JavaScript?",
        answers: ["function:myFunction()", "function=myFunction()", "function myFunction()"],
        correctAnswer: "function myFunction()",
        answered: 'no'
    }, 
    {
        question: "How does a FOR loop start?",
        answers: ["for(i<=5; i++)", "for(i=0; i<=5; i++)", "for(i=0; i<=5)"],
        correctAnswer: "for(i=0; i<=5; i++)",
        answered: 'no'
    }, 
    {
        question: "Which event occurs when the user clicks on an HTML element?",
        answers: ["onclick", "onchange", "onmouseclick"],
        correctAnswer: "onclick",
        answered: 'no'
    }
];

// Answers array assigned to a variable
var answersArray = questionBank[0].answers;

// A countdown timer starts when the button is clicked.
startGame.addEventListener('click', function() {

    generateQuestion();

    function setTime() {
        // Sets interval in variable
        var timerInterval = setInterval(function() {
            secondsLeft--;
            timeEl.textContent = secondsLeft;
            //Stops execution of setTime function at 0 seconds.
            if (secondsLeft === 0) {
                clearInterval(timerInterval);
            }
        }, 1000) 
    }
    setTime();
})

// Function to create question
function generateQuestion() {
    quizHeading.innerHTML  = '';
    startGame.remove();
    for (var i = 0; i <= questionBank.length; i++) {
        if (questionBank[i].answered === 'no') {
            questionBank[i].answered = 'yes';
            quizQuestion.innerHTML = questionBank[i].question;
            displayAnswers();
            return;
        }
    }
}

// Function to display answers
function displayAnswers() {

    for (var a = 0; a < answersArray.length; a++) {
        //Creating a list tag
        var liTag = document.createElement('li');
        liTag.classList.add('mb-1', 'list-unstyled', 'btn', 'btn-info', 'mx-2');
        liTag.setAttribute('id', a);
        liTag.textContent = answersArray[a];
        answerList.appendChild(liTag);
    }

}

ul.addEventListener('click', function(event) {
    console.log(event.target.id);
    console.log(questionBank[0].correctAnswer);
    if ( questionBank[0].answers[event.target.id] === questionBank[0].correctAnswer ) {
        var h6 = document.createElement('h6');
        h6.innerText = 'You got it!';
        quizQuestion.appendChild(h6);
        console.log('correct');
    } else {

    }
    
})
// function answerCheck(event) {
//     event.target
// }




// A student chooses the correct answer by clicking the button corresponding to the answer.
// A student gets 1 point for every correct answer.
// If the timer gets to zero, a message pops up that stops the quiz.
// At the end of the quiz, a pop up  comes up with a form to input your initials.
// You will have an option to view high scores

//When button is clicked, check to see if it is the correct answer
    // if correct answer, display message that says 'correct' and issue point
    // if wrong answer, display message that says 'incorrect'
// Go to the next question and set of answers when a question has been answered

