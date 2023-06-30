let seconds = 10;
let correctAnswer = 0;
let incorrectAnswer = 0;
function getElement(id) {
    return document.getElementById(id);
}

function timer() {
    setInterval(finish, seconds * 1000);
    getElement("time").innerHTML = seconds;
    let countdown = setInterval(function () {
        seconds--;
        getElement("time").textContent = seconds;
        if (seconds <= 0) clearInterval(countdown);
        if (seconds === 5) getElement("time").style.color = "#ffffff";

    }, 1000);
}
function check() {
    let input;
    try {
        input = document.querySelector('input[name = "option"]:checked').value;
    }
    catch {
        return;
    }
    correctAnswer++;
    getElement("score").innerHTML = correctAnswer;
    clearInterval(checkInteval);

}
function finish() {
    clearInterval(checkInteval);
    let percentage = 100;
    getElement("alertaccuracy").innerHTML = `${percentage}%`;

}
let checkInteval = setInterval(check, 50);
timer();