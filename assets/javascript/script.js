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






