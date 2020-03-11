// Start, question, and answer buttons
var startButton = document.getElementById("btn-start");
var startTextEl = document.getElementById("start-text");
var answerButton = document.querySelector(".answer-btn");
var questionContainerEl = document.getElementById("question-container");
var questionEl = document.getElementById("question");
var answerBtnEl = document.getElementById("answer-btns");



let questionIndex



// Respond to buttons being vlicked
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
   
    
}

// Timer -- need to get set to start button
var timeleft = 60;
var timer = setInterval(function(){
if(timeleft <= 0){
    clearInterval(timer);
    document.getElementById("time").innerHTML = "Quiz over";
} else {
    document.getElementById("time").innerHTML = "Time remaining: " + timeleft;
}
timeleft -= 1;
}, 1000);


function showQuestion(questions) {
    for (var i=0; i < questions.length; i++) {
        questionEl.innerText = question.question;
    }
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
            {a: "Jordan", correct: false},
            {b: "Finland", correct: false},
            {c: "Morocco", correct: true},
            {d: "South Africa", correct: false},
        ],
        correctAnswer: "c"
    },
    {
        question: "Which of the following is in the correct format for Javascript?",
        answers: [
            {a: "going-places", correct: false},
            {b: "going_places", correct: false},
            {c: "going places", correct: false},
            {d: "goingPlaces", correct: true},
        ],
        correctAnswer: "d"
    },
    {
        question: "Where would you start when traversing the DOM?",
        answers: [
            {a: "body", correct: false},
            {b: "childNode", correct: false},
            {c: "document", correct: true},
            {d: "children", correct: false},
        ],
        correctAnswer: "c"
    },
    {
        question: "Which of the following is incorrect?",
        answers: [
            {a: "DOM = document object model", correct: false},
            {b: "API = application programming index", correct: true},
            {c: "GUI = graphic user interface", correct: false},
            {d: "HTML = hypertext markup language", correct: false},
        ],
        correctAnswer: "b"
    },
    {
        question: "What should you use for your code to read a button being “clicked?",
        answers: [
            {a: "addEventListener", correct: true},
            {b: "querySelector", correct: false},
            {c: "setAttribute", correct: false},
            {d: "getElementById", correct: false},
        ],
        correctAnswer: "a"
    }


]
