var userScore = document.getElementById("score-list");
var clearHighscores = document.getElementById("clear-highscores");
var goBack = document.getElementById("go-back");

clearHighscores.addEventListener("click", function() {
    localStorage.clear();
    location.reload();
});

var allScores = localStorage.getItem("allScores");
allScores = JSON.parse(allScores);

if (allScores !== null) {
    for (var i = 0; i < allScores.length; i++) {
        var createLi = document.createElement("li");
        createLi.textContent = allScores[i].initials + " " + allScores[i].score;
        userScore.appendChild(createLi);
    
    }
}

goBack.addEventListener("click", function() {
    window.location.replace("index.html");
});