var highscoresList = document.getElementById("highscores");

function scoresList() {
    var highscores = JSON.parse(localStorage.getItem("score"))
    if (highscores=== null) {
    highscoresList.innerHTML = '<li>No Highscores!</li>'
    }

    else {
        highscores.sort(function (a, b) { return b.score - a.score })
        for (var j = 0; j < highscores.length; j++) {
            var listItem = document.createElement("li");
            listItem.textContent = 'name: ' + highscores[j].userName + ' - ' + highscores[j].score;
            highscoresList.appendChild(listItem);
        }
    }
}
scoresList()
function redirect() {
    location.href = "index.html"
}

function clearHighscores() {
    localStorage.clear();
    scoresList();
}