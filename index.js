const imageObject = {1:"./images/dice1.png",
                     2:"./images/dice2.png",
                     3:"./images/dice3.png", 
                     4:"./images/dice4.png",
                     5:"./images/dice5.png",
                     6:"./images/dice6.png"};

function generateNum(){
    randomNum = (Math.random()*6) + 1;
    return Math.floor(randomNum);
}

function getWinner(player1, player2){
    let winnerText;

    if (player1 > player2){
        winnerText = '🚩 Player 1 Wins';

    }else if (player2 > player1){
        winnerText = 'Player 2 Wins 🚩';
    }else{
        winnerText = 'It is a Draw,Refresh Me';
    }
    return winnerText;
}


let player1 = generateNum();
let player2 = generateNum();

let player1ImageSrc = imageObject[player1];
let player2ImageSrc = imageObject[player2];

const domPlayer1Src = document.querySelector(".img1").setAttribute("src", player1ImageSrc);
const domPlayer2Src = document.querySelector(".img2").setAttribute("src", player2ImageSrc);
const headerText = document.querySelector("h1");

headerText.textContent = getWinner(player1,player2);
