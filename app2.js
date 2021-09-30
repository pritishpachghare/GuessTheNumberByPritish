




// const numbers = [1..toExponential50]

const computerNum = Math.floor(Math.random() * 50);

const btn = document.querySelector(".btn1")

const h1 = document.querySelector(".h1");

btn.addEventListener('click', function () {
    const input = document.querySelector(".input").value;
    if (input == computerNum) {
        h1.innerHTML = `You Guessed Right Number,Your number is ${computerNum}`;
    }
    else if (input < computerNum) {
        h1.innerHTML = "You Guess Too Lower!!😃"

    }
    if (input > computerNum) {
        h1.innerHTML = "You Guess Too Higher!!😃"
    }
});

const btn2 = document.querySelector(".btn2")
const mainBtn = document.querySelector('#btn')
// btn2.addEventListener('click', function (e) {
//     e.preventDefault();

//     mainBtn.reset();
// }, false);


function myBtn() {
    location.reload();
}

const cs = '50'
const currntScore = document.querySelector('.cs');

currntScore.innerHTML = `Current Score:${cs}`

btn.addEventListener("click", function () {
    const input = document.querySelector(".input")
    if (input != computerNum) {
        currntScore.innerHTML = `current score:${cs - 5}`
    }

})

higher





