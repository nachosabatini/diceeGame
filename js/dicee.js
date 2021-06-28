let dicePlayer1 = Math.floor(Math.random() * 6) + 1;
let dicePlayer2 = Math.floor(Math.random() * 6) + 1;

while (dicePlayer1 === dicePlayer2){
    dicePlayer1 = Math.floor(Math.random() * 6) + 1;
    dicePlayer2 = Math.floor(Math.random() * 6) + 1;
}

document.querySelector("img.img1").setAttribute("src",`images/dice${dicePlayer1}.png`);
document.querySelector("img.img2").setAttribute("src",`images/dice${dicePlayer2}.png`);

document.querySelector("h1.winner").textContent = `Player ${(dicePlayer1 > dicePlayer2) ? "1" : "2"} wins!🚩`