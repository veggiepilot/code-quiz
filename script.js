 
// Start the quiz when the start button is clicked
// A countdown timer starts when the button is clicked.
// Create a list of questions to ask the student
// A student chooses the correct answer by clicking the button corresponding to the answer.
// A student gets 1 point for every correct answer.
// When a question has been answered, a message comes up to confirm whether the answer is correct or wrong. 
// The next question is loaded to the screen after an answer has been given.
// If the timer gets to zero, a message pops up that stops the quiz.
// At the end of the quiz, a pop up  comes up with a form to input your initials.
// You will have an option to view high scores


var questionBank = [
    {
        question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
        answers: ["<script name='xxx.js'>", "<script href='xxx.js'", "<script src='xxx.js'"],
        correctAnswer: "<script src='xxx.js'" 
    }, 
    {
        question: "How do you write 'Hello World' in an alert box?",
        answers: ["alertBox('Hello World')", "alert('Hello World')", "msg('Hello World')"],
        correctAnswer: "alert('Hello World')" 
    }, 
    {
        question: "How do you create a function in JavaScript?",
        answers: ["function:myFunction()", "function=myFunction()", "function myFunction()"],
        correctAnswer: "function myFunction()" 
    }, 
    {
        question: "How does a FOR loop start?",
        answers: ["for(i<=5; i++)", "for(i=0; i<=5; i++)", "for(i=0; i<=5)"],
        correctAnswer: "for(i=0; i<=5; i++)" 
    }, 
    {
        question: "Which event occurs when the user clicks on an HTML element?",
        answers: ["onclick", "onchange", "onmouseclick"],
        correctAnswer: "onclick" 
    }
];
