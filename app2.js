




// const numbers = [1..toExponential50]

const computerNum = Math.floor(Math.random() * 50);

const btn = document.querySelector(".btn1")

const h1 = document.querySelector(".h1");


let cs = '50'
const currntScore = document.querySelector('.cs');
const HighScore = document.querySelector('.hs');

currntScore.innerHTML = `Current Score:${cs}`;

btn.addEventListener('click', function () {
    const input = document.querySelector(".input").value;

    if (input == computerNum) {
        h1.innerHTML = `You Guessed Right Number,Your number is ${computerNum}`;
        cs = cs + 5
        currntScore.innerHTML = `Current Score:${cs}`;
        HighScore.innerHTML = `High Score:${cs}`;

    }
    else if (input < computerNum && cs > 0) {
        h1.innerHTML = "You Guess Too Lower!!😃"

        cs = cs - 5;
        currntScore.innerHTML = `Current Score:${cs}`;



    }
    else if (input > computerNum && cs > 0) {
        h1.innerHTML = "You Guess Too Higher!!😃"
        cs = cs - 5;
        currntScore.innerHTML = `Current Score:${cs}`;

    }
    // if (input !== isNaN(computerNum)) {
    //     h1.innerHTML = "Please enter number"
    // }
    if (cs == 0) {
        h1.innerHTML = "Opps you lose game"
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

// const cs = '50'
// const currntScore = document.querySelector('.cs');

// currntScore.innerHTML = `Current Score:${cs}`;


// btn.addEventListener("click", function () {
//     const input = document.querySelector(".input").value;
//     if (input !== computerNum) {
//         currntScore.innerHTML = `Current Score:${cs - 5}`;
//     }

    // if (input !== computerNum) {
    //     const js = cs + 5;
    //     currntScore.innerHTML = `Current Score:${cs}`
    // }

// })

// btn.addEventListener("click", function () {
//     const input = document.querySelector(".input")
//     if (input !== computerNum) {
//         cs = cs - 5;
//         currntScore.innerHTML = `Current Score:${js}`
//     }
//     if (input == computerNum) {
//         const js = cs + 5;
//         currntScore.innerHTML = `Current Score:${js}`
//     }
// })




