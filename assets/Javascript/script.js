var startBtn = document.getElementById("start-button")
var startScrn = document.getElementById("start-screen")
var qaScrn = document.getElementById("qa-screen")
var questionHeading = document.getElementById("question");
var answerList = document.getElementById("answers")
var timerDisplay = document.getElementById("timer-display")
var whereAreWe = 0;
var timeLeft = 75

startBtn.addEventListener("click", function(event) {
    startScrn.classList.add("d-none");
    qaScrn.classList.remove("d-none");

    startTimer();

    questionHeading.textContent = questions[whereAreWe].title;
    answerList.innerHTML = "";

    var answerOptions = questions[whereAreWe].choices;
    for(var i = 0 ; i< answerOptions.length; i++) {
        var newChoice = document.createElement("button");
        var buttonSpacing = document.createElement("div");

        newChoice.classList.add("btn", "btn-primary", "float-left")
        newChoice.textContent = questions[whereAreWe].choices[i];
        buttonSpacing.classList.add("row", "text-center", "p-3")
        answerList.appendChild(newChoice);
        buttonSpacing.appendChild(newChoice);
        answerList.appendChild(buttonSpacing)
    }

})

function startTimer () {

    var timer = setInterval( function () {
        timeLeft--;
        timerDisplay.textContent = timeLeft;

        if(timeLeft < 1) {
            clearInterval(timer);
        }
    }, 1000)

}

