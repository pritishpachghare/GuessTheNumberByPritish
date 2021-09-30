




// const numbers = [1..toExponential50]

let computerNum = Math.floor(Math.random() * 50);

let btn = document.getElementById(".btn1")
console.log(btn)

let h1 = document.getElementById(".h1");

btn.addEventListener('click', function () {
    let input = document.getElementById(".input").value;
    if (input === computerNum) {
        h1.innerHTML = `You Guessed Right,You number is ${computerNum}`;
    }
    else if (input < computerNum) {
        h1.innerHTML = "You Guess Too Low"
    }
    if (input > computerNum) {
        h1.innerHTML = "you guess too large"
    }
});




