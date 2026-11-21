let timerEl = document.getElementById("timer");
let defuserEl = document.getElementById("defuser");

let countdown = 10;
let intervalId = setInterval(function() {
    countdown = countdown-1;
    timerEl.textContent = countdown;
    if(countdown === 0) {
        timerEl.textContent = "Boom";
        clearInterval(intervalId);
    }
}, 1000);
defuserEl.addEventListener("keydown", function(event) {
    let bombDefuserTest = defuserEl.value;
    if(bombDefuserTest === "defuser" && event.key === "Enter" && countdown !== 0) {
        timerEl.textContent = "you defuse the bomb";
        clearInterval(intervalId);
    }
});