var startButton = document.getElementById("btn-start");
var questionContainerEl = document.getElementById("question-container");

var questionEl = document.getElementById("question")
var answerBtnEl = document.getElementById("answer-btns")


// var questionOneEl = document.quiz.questionOne.value;
// var questionTwoEl = document.quiz.questionTwo.value;
// var questionThreeEl = document.quiz.questionThree.value;
// var questionFourEl = document.quiz.questionFour.value;
// var questionFiveEl = document.quiz.questionFive.value;

var correct = 0;

startButton.addEventListener("click", startQuiz)


function startQuiz() {
    // console.log("Start Quiz")
    startButton.classList.add("hide");
    questionContainerEl.classList.remove("hide");
    nextQuestion();


}


function nextQuestion() {
    showQuestion(
 **     For (i = 0; i , questions.length; i++) 
 **     return += questions[i],
    )

}

function selectAnswer(){


}


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
    }
    {
        question: "Which of the following is in the correct format for Javascript?",
        answers: [
            {text: "going-places", correct: false},
            {text: "going_places", correct: false},
            {text: "going places", correct: false},
            {text: "goingPlaces", correct: true,
        ]
    }
    {
        question: "Where would you start when traversing the DOM?",
        answers: [
            {text: "body", correct: false},
            {text: "childNode", correct: false},
            {text: "document", correct: true},
            {text: "children", correct: false},
        ]
    }
    {
        question: "Which of the following is incorrect?",
        answers: [
            {text: "DOM = document object model", correct: false},
            {text: "API = application programming index", correct: true},
            {text: "GUI = graphic user interface", correct: false},
            {text: "HTML = hypertext markup language", correct: false},
        ]
    }
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