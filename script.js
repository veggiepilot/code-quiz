 
// Start the quiz when the start button is clicked
var startGame    = document.getElementById('game-start');
var timeEl       = document.getElementById('timer');
var quizHeading  = document.getElementById('quiz-heading');
var quizQuestion = document.getElementById('quiz-question');
var answerList   = document.getElementById('answer-list');
var secondsLeft  = 60;
var ul           = document.getElementById('answer-list');
var points       = 0;
var questionID;
var answerMessage  = document.getElementById('answerMessage');
var pTags          = document.getElementById('paragraph-tags');
var inputForm      = document.getElementById('input-form');
var completionPage = document.getElementById('all-done');
var formSubmit     = document.getElementById('form-submit');
var endText        = document.getElementById('all-done');


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
    points = 0;


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
    pTags.innerText = '';
    startGame.remove();

    for (var i = 0; i < questionBank.length; i++) {
        var answersArray = questionBank[i].answers;
        questionID = i;
        if (questionBank[i].answered === 'no') {
            questionBank[i].answered = 'yes';
            quizQuestion.innerHTML = questionBank[i].question;
            // displayAnswers();
            for (var a = 0; a < answersArray.length; a++) {
                //Creating a list tag
                var liTag = document.createElement('li');
                liTag.classList.add('mb-1', 'list-unstyled', 'btn', 'btn-info', 'mx-2');
                liTag.setAttribute('id', a);
                liTag.textContent = answersArray[a];
                answerList.appendChild(liTag);
            }
 
            return;
        }

    }

    quizQuestion.innerText = '';
    var inputTag = document.createElement('input');
    inputTag.classList.add('form-control');
    inputTag.setAttribute('type', 'text');
    inputTag.setAttribute('placeholder', 'Enter initials here');
    inputForm.appendChild(inputTag);

    var formSubmitButton = document.createElement('button');
    formSubmitButton.classList.add('btn', 'btn-primary');
    formSubmitButton.setAttribute('type', 'submit');
    formSubmitButton.innerText = 'Submit';
    formSubmit.appendChild(formSubmitButton);

    var completionMessage = document.createElement('h6');
    completionMessage.innerText = 'All done! \n Your score is ' + points;
    endText.appendChild(completionMessage);

}

ul.addEventListener('click', function(event) {
    if ( questionBank[questionID].answers[event.target.id] === questionBank[questionID].correctAnswer ) {
        points += 2;
        generateQuestion();
        // To refactor
        document.getElementById(0).remove();
        document.getElementById(1).remove();
        document.getElementById(2).remove();
        answerMessage.innerText = 'Correct!';
        setTimeout(function() {
            answerMessage.innerText = ''
        }, 1000)
    } else {
        secondsLeft -= 5;
        generateQuestion();
        // To refactor
        document.getElementById(0).remove();
        document.getElementById(1).remove();
        document.getElementById(2).remove();
        answerMessage.innerText = 'Wrong!';
        setTimeout(function() {
            answerMessage.innerText = ''
        }, 1000)
    }
    
});




// A student chooses the correct answer by clicking the button corresponding to the answer.
// If the timer gets to zero, a message pops up that stops the quiz.
// At the end of the quiz, a pop up  comes up with a form to input your initials.
// You will have an option to view high scores

// When the last question is answered, a form comes up to enter your intials. 
    // We tell the test taker that they are done
    // We tell the test taker their final score
// After submission, they are taken to a page that shows the high scores

