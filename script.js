var startButton = document.getElementById("btn-start");
var startTextEl = document.getElementById("start-text");
var answerButton = document.querySelector(".answer-btn");
var questionContainerEl = document.getElementById("question-container");

var questionEl = document.getElementById("question");
var answerBtnEl = document.getElementById("answer-btns");

let questionIndex

timeEl = document.getElementById("time");
var timeLeft = 60;


startButton.addEventListener("click", startQuiz)
answerButton.addEventListener("click", () => {
    questions[i]++;
    setNextQuestion;
})

// Start quiz - remove opening message and start button to move into first question
function startQuiz() {
    startButton.classList.add("hide");
    startTextEl.classList.add("hide");
    questionsIndex = 0;
    questionContainerEl.classList.remove("hide");
    showQuestion();
    setTime():
}

function showQuestion(questions) {
    for (var i=0; i < questions.length; i++) {
        questionEl.innerText = question.question;
    }
}

function setTime() {
    var timerInterval = setInterval(function(){
        timeLeft--;
        timeEl.textContent = "Time remaining: " + timeLeft;

        if(timeLeft === 0) {
            clearInterval(timerInterval);
            endQuiz();
        }
    }, 60000);
}

// function endQuiz() {
//     timeEl.textContent = " ";
// }

// function showQuestion(questions) {
//     questionEl.innerText = question.question;
    // answerBtnEl.innerText = answers.answers;
// }

// for (var i=0; i < questions.length; i++) {

// }

// function nextQuestion() {
//     showQuestion(
//      For (var i = 0; i < questions.length; i++) { 
//      return questions[i],
//      })
// }

// function selectAnswer(){

// }


// Quiz questions
var questions = [
    {
        question: "In the array var countries = [“Jordan”, “Finland”, “Morocco”, “South Africa”], which country is index[2]?",
        answers: [
            {text: "Jordan", correct: false},
            {text: "Finland", correct: false},
            {text: "Morocco", correct: true},
            {text: "South Africa", correct: false},
        ]
    },
    {
        question: "Which of the following is in the correct format for Javascript?",
        answers: [
            {text: "going-places", correct: false},
            {text: "going_places", correct: false},
            {text: "going places", correct: false},
            {text: "goingPlaces", correct: true},
        ]
    },
    {
        question: "Where would you start when traversing the DOM?",
        answers: [
            {text: "body", correct: false},
            {text: "childNode", correct: false},
            {text: "document", correct: true},
            {text: "children", correct: false},
        ]
    },
    {
        question: "Which of the following is incorrect?",
        answers: [
            {text: "DOM = document object model", correct: false},
            {text: "API = application programming index", correct: true},
            {text: "GUI = graphic user interface", correct: false},
            {text: "HTML = hypertext markup language", correct: false},
        ]
    },
    {
        question: "What should you use for your code to read a button being “clicked?",
        answers: [
            {text: "addEventListener", correct: true},
            {text: "querySelector", correct: false},
            {text: "setAttribute", correct: false},
            {text: "getElementById", correct: false},
        ]
    }


]

// if (questionOneEl ==="Morocco") {
//     correct++;
// }
// if (questionTwoEl ==="goingPlaces") {
//     correct++;
// }
// if (questionThreeEl ==="document") {
//     correct++;
// }
// if (questionFourEl ==="API = application programming index") {
//     correct++;
// }
// if (questionFiveEl ==="addEventListener") {
//     correct++;
// }







// document.getElementById("after-submit").style.visibility = "visible";
// document.getElementById("number_correct").innerHTML = "You got " + correct + " out of 5 questions correct";