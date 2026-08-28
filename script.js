window.addEventListener("load", () => {

setTimeout(() => {

    const loading = document.getElementById("loading");

    loading.style.opacity = "0";

    setTimeout(() => {
        loading.remove();
    },1000);

},2400);

});

/* PAGE SYSTEM */

function nextPage(id){

document.querySelectorAll(".page")
    .forEach(page => {
        page.classList.remove("active");
    });

document.getElementById(id)
    .classList.add("active");

}

/* START */

function startStory(){

nextPage("sense");

}

/* QUESTION */

function wrongAnswer(){

const message =
    document.getElementById("questionMessage");

message.style.color = "#e10600";

message.textContent =
    "ACCESS DENIED // THAT'S NOT THE REAL ANSWER.";

}

function correctAnswer(){

const message =
    document.getElementById("questionMessage");

message.style.color = "#55ff77";

message.textContent =
    "ACCESS GRANTED ♥ // YOU KNOW ME TOO WELL.";

setTimeout(() => {

    nextPage("confession");

    startTyping();

},900);

}

/* CONFESSION */

function startTyping(){

const text =
    "Because somewhere between all the jokes, conversations, and little moments... I started liking you more than I probably should.";

const target =
    document.getElementById("typing");

target.textContent = "";

let i = 0;

const interval =
    setInterval(() => {

        target.textContent += text[i];

        i++;

        if(i >= text.length){
            clearInterval(interval);
        }

    },35);

}

/* ENDING */

document.addEventListener("click", event => {

if(
    event.target.closest("#ending")
){
    createHearts();
}

});

function createHearts(){

const container =
    document.getElementById("hearts");

for(let i=0;i<35;i++){

    const heart =
        document.createElement("div");

    heart.textContent =
        Math.random() > .2
        ? "♥"
        : "✦";

    heart.style.position = "fixed";

    heart.style.left =
        Math.random()*100 + "vw";

    heart.style.top = "-30px";

    heart.style.color = "#e10600";

    heart.style.fontSize =
        (12 + Math.random()*25) + "px";

    heart.style.pointerEvents = "none";

    heart.style.zIndex = "9999";

    const duration =
        2000 + Math.random()*3500;

    heart.animate(

        [
            {
                transform:"translateY(0) rotate(0)",
                opacity:0
            },
            {
                transform:"translateY(40vh) rotate(180deg)",
                opacity:1
            },
            {
                transform:
                    "translateY(110vh) rotate(360deg)",
                opacity:0
            }
        ],

        {
            duration:duration,
            easing:"linear"
        }

    );

    container.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    },duration);

}

}
