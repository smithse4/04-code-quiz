var userScore = document.getElementById("score-list");
var clearHighscores = document.getElementById("clear-highscores");
var goBack = document.getElementById("go-back");
var submit = document.querySelector('#initials-submit')

// clearHighscores.addEventListener("click", function() {
//     localStorage.clear();
//     location.reload();
// });

// goBack.addEventListener("click", goBack);
// function goBack() {
//     window.location.replace("index.html");
// };

// document.getElementById("score-list").innerHTML = local.storage.getItem('scores')


// user inputs initials into box
// user clicks save button
submit.addEventListener('click', function() {
    // grab the initionals and score
    var score = document.querySelector('#score').innerHTML;
    var initials = document.querySelector('#initials-input').value;
    // console.log(score, initals);
    // put those into an object
    var scoreInfo = {
        initials: initials,
        score: score
    }

    // ------- check whats already on localstorage and add to it
    // get local storage use a var called scores
    
    // if localsotrage is empty // null
    // -- create a new array and add out thing
    // -- var scores = [scoreInfo];
    // else
    // -- parse it into javascript
    // -- push our object onto that array .push()

    // sotre into storage
    localStorage.setItem('scores', JSON.stringify(scores))
})



/*

[{"init":"bob","score":12},{"init":"marie","score":20},]


*/
