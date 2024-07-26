let h2 = document.querySelector("h2");
let win = document.querySelectorAll(".win");
let lost = document.querySelector(".lost");
let score = 0;

win.forEach(win => {
    win.addEventListener("click", () => {
        score = score+1;
        if(score == 8){
            h2.innerText = `You Won! Your Score: ${score}`;
        }
        else {
            h2.innerText = `Your Score: ${score}`;
        }
        win.style.backgroundColor = "green";
    });
});

lost.addEventListener("click", () => {
    h2.innerText = `You Lost! Score: ${score}`;
    lost.style.backgroundColor = "red";
});