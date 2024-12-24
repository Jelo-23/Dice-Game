var rolledDicePlayer1 = Math.round(Math.random() * 6);
var rolledDicePlayer2 = Math.round(Math.random() * 6);

var title = document.querySelector("#title");
var player1 = document.querySelector("#player-1");
var player2 = document.querySelector("#player-2");


if(rolledDicePlayer1 === rolledDicePlayer2){
    title.innerHTML = "🚩 Draw 🚩";
}
else if(rolledDicePlayer1 > rolledDicePlayer2){
    title.innerHTML = "🚩 Draw";
}
else if(rolledDicePlayer1 < rolledDicePlayer2){
    title.innerHTML = "Draw 🚩";
}


switch (rolledDicePlayer1) {
    case 1:
        player1.setAttribute("src", "./image/one.png");
        break;
    case 2:
        player1.setAttribute("src", "./image/two.png");
        break;
    case 3:
        player1.setAttribute("src", "./image/three.png");
        break;
    case 4:
        player1.setAttribute("src", "./image/four.png");
        break;
    case 5:
        player1.setAttribute("src", "./image/five.png");
        break;
    case 6:
        player1.setAttribute("src", "./image/six.png");
        break;

    default:
        console.log("One more time!!");
}

switch (rolledDicePlayer2) {
    case 1:
        player2.setAttribute("src", "./image/one.png");
        break;
    case 2:
        player2.setAttribute("src", "./image/two.png");
        break;
    case 3:
        player2.setAttribute("src", "./image/three.png");
        break;
    case 4:
        player2.setAttribute("src", "./image/four.png");
        break;
    case 5:
        player2.setAttribute("src", "./image/five.png");
        break;
    case 6:
        player2.setAttribute("src", "./image/six.png");
        break;

    default:
        console.log("One more time!!");
}


