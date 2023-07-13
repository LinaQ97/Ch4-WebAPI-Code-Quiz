var startBtn = document.getElementById("start-btn")
var introSectionEl = document.getElementById("intro-section")
var timerEl = document.getElementById("timer")
var questionsSectionEl = document.getElementById("question-section")
var titleEl = document.getElementById('title')
var choicesEl = document.querySelectorAll(".choices")
var questionIndex=0
var questionsArray = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["1.strings", "2.booleans", "3.alerts", "4.numbers"],
        answer: "c2"
    },
    {
        title: "The condition in an if/else statement is enclosed within ___.",
        choices: ["1.quotes", "2.curly brackets", "3.paranthesis", "4.square brackets"],
        answer: "c3"
    },
    {
        title: "Arrays in JavaScript can be used to store ___.",
        choices: ["1.numbers and strings", "2.other arrays", "3.booleans", "4.all of the above"],
        answer: "c4"
    },
    {
        title: "String values must be enclosed within ___ when being assigned to variables.",
        choices: ["1.commas", "2.curly brackets", "3.", "4.paranthesis"],
        answer: "c4"
    },
    {
        title: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["1.JavaScript", "2.terminal/bash", "3.for loops", "4.console.log"],
        answer: "c4"
    },
]

var timeLeft = questionsArray.length* 15


var setIntervalId = 0;

function startQuiz(){
    introSectionEl.classList.add("hide")
    questionsSectionEl.setAttribute("class", "")
    setIntervalId=setInterval(countDown,1000)
    showQuestions()
}

function countDown(){
    timerEl.textContent=timeLeft--
    if(timeLeft===0){
        clearInterval(setIntervalId)
    }
    
}

function showQuestions(){
    titleEl.textContent=questionsArray[questionIndex].title

    choicesEl[1].textContent=questionsArray[questionIndex].choices[1]

    choicesEl[2].textContent=questionsArray[questionIndex].choices[2]

    choicesEl[3].textContent=questionsArray[questionIndex].choices[3]

function nextQuestion(event){
var currentElement= event.target
if(currentElement.matches("button")){
    questionIndex++
    showQuestions()
}
}

}
startBtn.addEventListener("click", startQuiz)

questionsSectionEl.addEventListener("click", nextQuestion)