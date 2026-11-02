
var timer = 60;
var score = 0;
var hitren = 0;


// Function to increase score
function IncreaseScore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}


// Function to generate new hit number
function getNewHit() {
    hitren = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = hitren;
}


// Function to create bubbles
function CreatBubble() {
    var clutter = " ";

    for (var i = 1; i <= 137; i++) {
        var ren = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${ren}</div>`;
    }

    document.querySelector("#pbtm").innerHTML = clutter;
}


// Function to run timer
function runTimer() {
    var timerin = setInterval(function () {

        if (timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else {
            clearInterval(timerin);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1> 
            <button id = "restartBtn">RestartGame</button>`;
            document.querySelector("#restartBtn").addEventListener("click" , function(){
                timer=60;
                score=0;
            document.querySelector("#timerval").textContent=timer;
            document.querySelector("#scoreval").textContent=score;
                getNewHit();
                CreatBubble();
                runTimer();
            });
        }

    }, 1000);
}


// Bubble click event
document.querySelector("#pbtm").addEventListener("click", function (dets) {

    var clickednum = Number(dets.target.textContent);

    if (clickednum === hitren) {
        IncreaseScore();
        CreatBubble();
        getNewHit();
    }

});


// Start Button Event
document.querySelector("#startBtn").addEventListener("click", function () {

    document.querySelector("#startScreen").style.display = "none";

    getNewHit();
    runTimer();
    CreatBubble();

});
