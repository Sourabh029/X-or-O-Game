let boxes = document.querySelectorAll(".game-btn");
let reset = document.querySelector("#reset-btn");
let displayContainer = document.querySelector(".msg-container");
let message = document.querySelector("#msg");
let newGameBtn = document.querySelector("#newGameBtn");
let game = document.querySelector("#game");
let turnO = true;
let gameOver = false;
let count = 0;

const winPattern = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

boxes.forEach(element => {
    element.addEventListener("click", () => {
        count += 1;
        if (turnO) {
            element.innerText = "O";
            turnO = false;
            element.disa
        }
        else {
            element.innerText = "X";
            turnO = true;
        }
        element.disabled = true;
        checkwinner();
        checkTie();
    });
});



newGameBtn.addEventListener("click", () => {
    startNewGame();
    resetSet();
});

let checkTie = () => {
    boxes.forEach(element => {
        if (count === 9 && gameOver === false) {
            alert("game Tie");
            resetSet();
        }
    });
}

let checkwinner = () => {
    console.log(boxes[7].innerText);
    winPattern.forEach(element => {

        let el1 = boxes[element[0]].innerText;
        let el2 = boxes[element[1]].innerText;
        let el3 = boxes[element[2]].innerText;

        if (el1 !== "" && el2 !== "" && el3 !== "") {
            if (el1 === el2 && el2 === el3) {
                resetSet();
                winner(el1);
                displayContainer.classList.remove("hide");
                game.classList.add("hide");
                gameOver = true;
                count = 0;
            }
        }

    });
};




let resetSet = () => {
    boxes.forEach(element => {
        element.innerText = "";
        element.disabled = false;
        gameOver = false;
        count = 0;
    });
}

let winner = (winner) => {
    message.innerText = `Winner of the game is ${winner}`;
}

let startNewGame = () => {
    game.classList.remove("hide");
    displayContainer.classList.add("hide");
    gameOver = false;
}

reset.addEventListener("click", () => {
    resetSet();
})