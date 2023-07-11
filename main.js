

let correct;
let seconds = 30;
let correctAnswer = 0;
let incorrectAnswer = 0;
function getElement(id) {
    return document.getElementById(id);
}
function getRandomCountry() {
    return countries[Math.round(Math.random() * (countries.length - 1))];
}
function main() {
    let options = [];
    const maxOptions = 3;
    while (options.length < maxOptions) {
        let coun = getRandomCountry();
        if (options.indexOf(coun) === -1) {
            options.push(coun);
        }
    }
    for (let i = 0; i < options.length; i++) {
        getElement(`option${i + 1}label`).innerHTML = options[i].name;
        getElement(`option${i + 1}input`).value = options[i].name;
        getElement(`option${i + 1}input`).checked = false;
    }
    correct = options[Math.round(Math.random() * (options.length - 1))];
    getElement("magnish").src = correct.magnish;
}
function timer() {
    setTimeout(finish, seconds * 1000);
    getElement("time").innerHTML = seconds;
    let countdown = setInterval(function () {
        seconds--;
        getElement("time").textContent = seconds;
        if (seconds <= 0) clearInterval(countdown);
        if (seconds === 5) getElement("time").style.color = "#ff0000";
    }, 1000);
}
function check() {
    let input;
    try {
        input = document.querySelector('input[name = "option"]:checked').value;
    } catch {
        return;
    }
    if (input === correct.name) {
        correctAnswer++;
        getElement("score").innerHTML = correctAnswer;
    } else {
        incorrectAnswer++;
    }
    main();
}
function finish() {
    clearInterval(checkInterval);
    getElement("alert").style.display = "block";
    getElement("card").style.display = "none";
    getElement("alertscore").innerHTML = correctAnswer;
    let percentage = Math.round(correctAnswer / (correctAnswer + incorrectAnswer) * 100)
    console.log(percentage)
    if (isNaN(percentage)) {
        resuliForAnswers =  "Դու վոչ մի հարցի չես պատսխանել";
    }
    else {
        if (percentage >= 15 && percentage < 55) {
            resuliForAnswers = "Դուք ցուցաբերել էք վատ արդյունք"
        }
         else if (percentage >= 55 && percentage < 75) {
            resuliForAnswers = "Դուք ցուցաբերել էք միջին արդյունք"
        }
        else if (percentage >= 75 && percentage < 95) {
            resuliForAnswers = "Դուք ցուցաբերել էք լավ արդյունք"

        } else if (percentage >= 95) {
            resuliForAnswers = "Դուք ցուցաբերել էք գերազանց արդյունք"
        }
        else {
            resuliForAnswers = "Դուք ցուցաբերել էք շատ վատ արդյունք"
        }
    }
    getElement("alertscore").innerHTML = correctAnswer;
    getElement("alertaccuracy").innerHTML = resuliForAnswers;
}
function refresh() {
    location = location;
}

let checkInterval = setInterval(check, 50);
main();
timer();

