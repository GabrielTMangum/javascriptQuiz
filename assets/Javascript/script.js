var startBtn = document.getElementById("start-button")
var startScrn = document.getElementById("start-screen")
var qaScrn = document.getElementById("qa-screen")
var questionHeading = document.getElementById("question");
var answerList = document.getElementById("answers")
var timerDisplay = document.getElementById("timer-display")
var whereAreWe = 0;
var timeLeft = 75

console.log(questions[whereAreWe].answer)

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
        newChoice.setAttribute("value", questions[whereAreWe].choices[i])
        newChoice.setAttribute("id", i)
        buttonSpacing.classList.add("row", "text-center", "p-3")
        answerList.appendChild(newChoice);
        buttonSpacing.appendChild(newChoice);
        answerList.appendChild(buttonSpacing)
    }

})
if (document.getElementById("0").value === questions[whereAreWe].answer){
    alert("boo")
} else if (document.getElementById("1").value === questions[whereAreWe].answer){
    alert("boo")
} else if (document.getElementById("2").value === questions[whereAreWe].answer){
    alert("boo")
} else if (document.getElementById("3").value === questions[whereAreWe].answer){
    alert("boo")
}

function answerValidator(event){
    event.stopPropagation();
    alert("boo")
//     if(newChoice.textContent === questions[whereAreWe].answer)
//     {
//         alert("boo")
//         nextQuestion();
//     } else {
//         timeLeft -= 15;
//     }
}

function nextQuestion () {

}

function startTimer () {

    var timer = setInterval( function () {
        timeLeft--;
        timerDisplay.textContent = timeLeft;

        if(timeLeft < 1) {
            clearInterval(timer);
        }
    }, 1000)

}

function stopTimer () {
    clearInterval(timer);
}