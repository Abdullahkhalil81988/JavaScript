let resetButton = document.querySelector("#Reset");
let newGameButton = document.querySelector("#NewGame");
let boxes = document.querySelectorAll(".Box");
let turno = true; // true = X, false = O

const win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

boxes.forEach(box => {
    box.addEventListener("click", () => {
        console.log("clicked");
        if(turno && box.innerText === ""){
            box.innerText = "x";
            turno = false;
        } else if (!turno && box.innerText === ""){
            box.innerText = "o";
            turno = true;
        }
        
        setTimeout(() => {
            checkWin();
        }, 100);
    });
});

resetButton.addEventListener("click", () => {
    resetGame();
});

newGameButton.addEventListener("click", () => {
    resetGame();
    console.log("New game started!");
});

function checkWin() {
    win.forEach(pattern => {
        const [a, b, c] = pattern;
        if (boxes[a].innerText && 
            boxes[a].innerText === boxes[b].innerText && 
            boxes[a].innerText === boxes[c].innerText) {
            alert(`Player ${boxes[a].innerText} wins!`);
            resetGame();
        }
    });
}

function resetGame() {
    boxes.forEach(box => {
        box.innerText = "";
    });
    turno = true;
}

