// Start and question buttons and containers
var startButton = document.getElementById("btn-start");
var startTextEl = document.getElementById("start-text");
var questionContainerEl = document.getElementById("question-container");
var questionEl = document.getElementById("question");
var choicesEl = document.getElementById("choices");
// Timer
var time = 60;
var timerID;
var timeEl = document.getElementById("countdown")


var currentQuestionIndex = 0



// Respond to buttons being vlicked
startButton.addEventListener("click", startQuiz)
// answerButton.addEventListener("click", () => {
//     questions[i]++;
//     setNextQuestion;
// })

// Start quiz - pressing "start" button results in opening message changing to first question and timer initializes.
function startQuiz() {
    startButton.classList.add("hide");
    startTextEl.classList.add("hide");
    questionContainerEl.classList.remove("hide");
    // Initialize countdown timer
    timerId = setInterval(clock, 1000);
    timeEl.textContent = time;
    // Move from start view to the first question
    showQuestion();
}

function clock() {
    // track time
    time--;
    timeEl.textContent = time;
    // If user runs out of time before finishing quix, end quiz
    if (time <= 0) {
        quizEnd();
    }
}
// Timer -- need to get set to start button
// var timeleft = 60;
// var timer = setInterval(function(){
// if(timeleft <= 0){
//     clearInterval(timer);
//     document.getElementById("time").innerHTML = "Quiz over";
// } else {
//     document.getElementById("time").innerHTML = "Time remaining: " + timeleft;
// }
// timeleft -= 1;
// }, 1000);

// Function to populate questions from our question array.
function showQuestion() {
    // Find question from array of questions
    var currentQuestion = questions[currentQuestionIndex];
    // Fill in question
    var titleEl = document.getElementById("question-slot");
    titleEl.textContent = currentQuestion.title;
    choicesEl.innerHTML = "";

    currentQuestion.choices.forEach(function(choice, i) {
        var choiceNode = document.createElement("button");
        choiceNode.setAttribute("class", "choice");
        choiceNode.setAttribute("value", choice);
        choiceNode.textContent = i + 1 + ". " + choice;
        // Make new choice buttons click listenter
        choiceNode.onclick = clickChoiceButton;
        // Append choice so it displays on page
        choicesEl.appendChild(choiceNode);
    });
}

// Function to react to question choice being clicked. Depending on quiz status could move to next question or end quiz. Will also deduct time from timer if question is answered incorrectly.




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






