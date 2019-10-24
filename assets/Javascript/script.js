var startBtn = document.getElementById("start-button");
var startScrn = document.getElementById("start-screen");
var qaScrn = document.getElementById("qa-screen");
var questionHeading = document.getElementById("question");
var answerList = document.getElementById("answers");
var timerDisplay = document.getElementById("timer-display");
var initialsScreen = document.getElementById("initials-screen");
var finalScore = document.getElementById("final-score");
var name;
var whereAreWe = 0;
var timeLeft = 75
var timer;
var score;




startBtn.addEventListener("click", function (event) {
    startScrn.classList.add("d-none");
    qaScrn.classList.remove("d-none");

    startTimer();

    questionHeading.textContent = questions[whereAreWe].title;
    answerList.innerHTML = "";

    var answerOptions = questions[whereAreWe].choices;

    for (var i = 0; i < answerOptions.length; i++) {
        var newChoice = document.createElement("button");
        var buttonSpacing = document.createElement("div");

        newChoice.classList.add("btn", "btn-primary", "float-left", "buttons")
        newChoice.textContent = questions[whereAreWe].choices[i];
        newChoice.setAttribute("dataChoice", questions[whereAreWe].choices[i])
        newChoice.setAttribute("onclick", "answerValidator(event)")
        buttonSpacing.classList.add("row", "text-center", "p-3")
        answerList.appendChild(newChoice);
        buttonSpacing.appendChild(newChoice);
        answerList.appendChild(buttonSpacing)

    }


})

function answerValidator(event) {
    event.stopPropagation();

    if (event.target.attributes.dataChoice.nodeValue === questions[whereAreWe].answer && whereAreWe < 9) {
        nextQuestion();
    } else if (event.target.attributes.dataChoice.nodeValue !== questions[whereAreWe].answer && whereAreWe < 9) {
        timeLeft -= 15;
        nextQuestion();
    } else {
        endScreen();
    }
}

function nextQuestion() {
    whereAreWe++;

    questionHeading.innerHTML = questions[whereAreWe].title;
    answerList.innerHTML = "";

    var answerOptions = questions[whereAreWe].choices;

    for (var i = 0; i < answerOptions.length; i++) {
        var newChoice = document.createElement("button");
        var buttonSpacing = document.createElement("div");

        newChoice.classList.add("btn", "btn-primary", "float-left", "buttons")
        newChoice.textContent = questions[whereAreWe].choices[i];
        newChoice.setAttribute("dataChoice", questions[whereAreWe].choices[i])
        newChoice.setAttribute("onclick", "answerValidator(event)")
        buttonSpacing.classList.add("row", "text-center", "p-3")
        answerList.appendChild(newChoice);
        buttonSpacing.appendChild(newChoice);
        answerList.appendChild(buttonSpacing)

    }

}

function endScreen (){
    if(timeLeft < 0){
        timeLeft = 0
        timerDisplay.textContent = timeLeft;
    }
    qaScrn.classList.add("d-none");
    initialsScreen.classList.remove("d-none")

    stopTimer();

    score = timeLeft;
    finalScore.textContent = score;
}

function nameStorage() {
    name = document.getElementById("initials").value
    
    var storedScores = JSON.parse(localStorage.getItem("score"));

    if (storedScores !== null) {
        storedScores.push({userName: name, score: score})
        localStorage.setItem("score", JSON.stringify(storedScores));

    } else {
        localStorage.setItem("score", JSON.stringify([{userName: name, score: score}]));
    }
    console.log(JSON.parse(localStorage.getItem("score")))
    location.href = "highscore.html"

    console.log("hi")
}

function startTimer() {

        timer = setInterval(function () {
        timeLeft--;
        timerDisplay.textContent = timeLeft;

        if (timeLeft < 1) {
            clearInterval(timer);
            endScreen();
        } 
    }, 1000)

}



function stopTimer() {
    clearInterval(timer);
}