// Start and question buttons and containers
var startButton = document.getElementById("btn-start");
var startTextEl = document.getElementById("start-text");
var questionContainerEl = document.getElementById("question-container");
var questionEl = document.getElementById("question");
var choicesEl = document.getElementById("choices");
var rightWrongEl = document.getElementById("right-wrong");
var endQuizContainerEl = document.getElementById("end-quiz");
var initialsInput = document.getElementById("initials-input");
var initialsSubmit = document.getElementById("initials-submit");
// Timer
var time = 60;
var timerID;
var timeEl = document.getElementById("countdown")
// Score
var scoreEl = document.getElementById("score")


var currentQuestionIndex = 0



// Initialize quiz when start button is clicked
startButton.addEventListener("click", startQuiz);
// Save users score to local storage when submit initials button is clicked
// initialsSubmit.addEventListener("click", saveScore)


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

// Function to populate questions from our question array.
function showQuestion() {
    // Find question from array of questions
    var currentQuestion = questions[currentQuestionIndex];
    // Fill in question
    var titleEl = document.getElementById("question-slot");
    titleEl.textContent = currentQuestion.question;
    choicesEl.innerHTML = "";

    currentQuestion.choices.forEach(function(choice, i) {
        var choiceNode = document.createElement("button");
        choiceNode.setAttribute("class", "choice-btn");
        choiceNode.setAttribute("value", choice);
        choiceNode.textContent = i + 1 + ". " + choice;
        // Make new choice buttons click listenter
        choiceNode.onclick = clickChoiceButton;
        // Append choice so it displays on page
        choicesEl.appendChild(choiceNode);
    });
}

// Function to react to question choice being clicked. Depending on quiz status could move to next question or end quiz. Will also deduct time from timer if question is answered incorrectly.
function clickChoiceButton() {
    // check to see if user answered question right or wrong
    if (this.value !== questions[currentQuestionIndex].answer) {
        time -= 10;

        if(time < 0) {
            time = 0;
        }
        timeEl.textContent = time;

        // Notify quiz taker if they answered right or wrong
        rightWrongEl.textContent = "Wrong"
        } else {
        rightWrongEl.textContent = "Correct! Good job!";
        }
        rightWrongEl.setAttribute("class", "right-wrong");

        setTimeout(function() {
            rightWrongEl.setAttribute("class", "right-wrong hide");
        }, 500);

        currentQuestionIndex++;

        if (currentQuestionIndex === questions.length) {
            quizEnd();
        } else {
            showQuestion ();
        }
}

// Function for when the quiz is finished
function quizEnd() {
    // Stop timer
    clearInterval(timerId);
    // hide question container
    questionContainerEl.setAttribute("class", "hide");
    // show end quiz container
    endQuizContainerEl.setAttribute("class", "show");
    // users score equals time remaining
    scoreEl.textContent = time;
}

// Highscore local storage

var initialsSubmit = document.getElementById("initials-submit");

initialsSubmit.addEventListener("click", function() {
    var initials = initialsInput.value;

    if (initials === null) {
        alert("Must include initials");
    } else {
        var userScore = {
            initials: initials,
            score: time
        }
        var allScores = localStorage.getItem("allScores");
        if (allScores === null) {
        } else {
            allScores = JSON.parse(allScores);
        }
        allScores.push(userScore);
        var newScore = JSON.stringify(allScores);
        localStorage.setItem("allScores");

        window.location.replace("highscores.html");
    }
});



// initialsSubmit.addEventListener("click", function(event) {
//     event.preventDefault();

//     var userScore = {
//         initials: initialsInput.value.trim(),
//         score: time.value.trim(),
//     }
//     console.log(userScore)

//     // Grab initials inputed by user
//     // var initials = initialsInput.value;
//     // if (initials === "") {
//     //     displayMessage("error", "Initials cannot be blank");
//     // }

//     // var highscores = JSON.parse(window.localStorage.getItem("highscores-list"))

//     // var userScore = {score: time, initials: initials};

//     // highscores.push(userScore); window.localStorage.setItem("highscores-list", JSON.stringify(highscores));
//     // // Send user to highscores page
//     // window.location.href = "highscore.html";


//     // }

// })








