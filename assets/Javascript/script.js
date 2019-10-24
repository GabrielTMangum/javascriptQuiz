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
        newChoice.setAttribute("id", i)
        buttonSpacing.classList.add("row", "text-center", "p-3")
        answerList.appendChild(newChoice);
        buttonSpacing.appendChild(newChoice);
        answerList.appendChild(buttonSpacing)
    }
    var option1 = document.getElementById("0").textContent;
    var option2 = document.getElementById("1").textContent;
    var option3 = document.getElementById("2").textContent;
    var option4 = document.getElementById("3").textContent;

    console.log(option1 + option2 + option3 + option4)
    
    
    answerList.addEventListener("click", function answerValidator(event){
        event.stopPropagation();
        
    })
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

function stopTimer () {
    clearInterval(timer);
}