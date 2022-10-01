let level = document.querySelector(".test .level");
let second = document.querySelector(".test .second");
let start = document.querySelector(".start");
let input = document.querySelector(".input");
let theword = document.querySelector(".the-word");
let word = document.querySelector(".word");
let time = document.querySelector(".control .time span");
let got = document.querySelector(".control .score .got");
let total = document.querySelector(".control .score .total");
let finsh = document.querySelector(".finsh");



const words = [
    "Hello",
    "Programming",
    "Code",
    "Javascript",
    "Town",
    "Country",
    "Testing",
    "Youtube",
    "Linkedin",
    "Twitter",
    "Github",
    "Leetcode",
    "Internet",
    "Python",
    "Scala",
    "Destructuring",
    "Paradigm",
    "Styling",
    "Cascade",
    "Documentation",
    "Coding",
    "Funny",
    "Working",
    "Dependencies",
    "Task",
    "Runner",
    "Roles",
    "Test",
    "Rust",
    "Playing"
];

const lev = {
    "eassy": 3,
    "normal": 5,
    "hard": 6
}







let addlevel = "normal";
let addsecond = lev[addlevel];


level.innerHTML = addlevel;
second.innerHTML = addsecond;
time.innerHTML = addsecond;
total.innerHTML = words.length;

input.onpaste = function() {
    return false;
}

start.onclick = function button() {
    start.remove();
    input.focus();


    addrandomwrite();
}

function addrandomwrite() {
    let writerandom = words[Math.floor(Math.random() * words.length)];
    console.log(writerandom);

    let indexwrite = words.indexOf(writerandom);
    console.log(indexwrite);

    words.splice(indexwrite, 1);

    theword.innerHTML = writerandom;

    word.innerHTML = "";

    for (let i = 0; i < words.length; i++) {
        let div = document.createElement("div");
        div.className = "div";
        let text = document.createTextNode(words[i]);
        div.appendChild(text);
        word.appendChild(div);

    }
    addtimetoplay();
}

function addtimetoplay() {
    time.innerHTML = addsecond;
    let start = setInterval(() => {
        time.innerHTML--;
        if (time.innerHTML === "0") {
            clearInterval(start);
            if (theword.innerHTML.toLowerCase() === input.value.toLowerCase()) {
                input.value = "";

                got.innerHTML++;
                if (word.length > 0) {
                    addrandomwrite();
                } else {
                    let span = document.createElement("span");
                    span.className = "good";

                    let fall = document.createTextNode("Congratulation");
                    span.appendChild(fall);
                    finsh.appendChild(span);

                    word.remove();
                }
            } else {
                let span = document.createElement("span");
                span.className = "bad";

                let fall = document.createTextNode("Game Over");

                span.appendChild(fall);
                finsh.appendChild(span);

            }
        }
    }, 1000);
}