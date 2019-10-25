// These are all my arrays that I'm going to be referencing throughout my app
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



// This is my button that start the whole thing off.  It swaps the visible blocks on the page and begins the timer countdown.  It also dynamically generates the buttons for the first page.
startBtn.addEventListener("click", function (event) {
    startScrn.classList.add("d-none");
    qaScrn.classList.remove("d-none");

    startTimer();

    questionHeading.textContent = questions[whereAreWe].title;
    answerList.innerHTML = "";

    var answerOptions = questions[whereAreWe].choices;

    // This is the for loop that starts the button generation for the answers on the quiz
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

// this is the function that gets called when a button is presson.  It compares the data value of the clicked button to the answer of the question that is held in questions.js
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

// this is the function that gets called after an answer is clicked. It progresses through the questions array held in questions.js
function nextQuestion() {
    whereAreWe++;

    questionHeading.innerHTML = questions[whereAreWe].title;
    answerList.innerHTML = "";

    var answerOptions = questions[whereAreWe].choices;

//  again this is the for loop that dynamically generates the buttons for each page.
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

// this is the fuction that gets called once there are no more quesitons to answer that makes the end screen the visible block on the page.
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

// This is the function that stores the user's initials so that we can put it onto the highscores screen as well as store it locally.
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

// this is the function that starts the timer countdown and stops it once it hits 0
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

// this is the function that stops the timer once the score hits 0 or the questions have all been answered.
function stopTimer() {
    clearInterval(timer);
}