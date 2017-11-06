var newGameBtn = document.getElementById('js-newGameButton'),
    pickRock = document.getElementById('js-playerPick_rock'),
    pickPaper = document.getElementById('js-playerPick_paper'),
    pickScissors = document.getElementById('js-playerPick_scissors'),
    newGameElem = document.getElementById('js-newGameElement'),
    pickElem = document.getElementById('js-playerPickElement'),
    resultsElem = document.getElementById('js-resultsTableElement'),
    gameWinner = document.getElementById('js-gameWinner'),
    playerPointsElem = document.getElementById('js-playerPoints'),
    playerNameElem = document.getElementById('js-playerName'),
    computerPointsElem = document.getElementById('js-computerPoints'),
    playerPickElem = document.getElementById('js-playerPick'),
    computerPickElem = document.getElementById('js-computerPick'),
    playerResultElem = document.getElementById('js-playerResult'),
    computerResultElem = document.getElementById('js-computerResult');

var gameState = 'notStarted',  //started // ended
    player = {
        name: 'Your name',
        score: 0
    },
    computer = {
        score: 0
    };

newGameBtn.addEventListener('click', newGame);

pickRock.addEventListener('click', function() { playerPick('rock'); });
pickPaper.addEventListener('click', function() { playerPick('paper'); });
pickScissors.addEventListener('click', function() { playerPick('scissors'); });


function setGameElements() {
    switch(gameState) {
        case 'started':
            gameWinner.style.display = 'none';
            newGameElem.style.display = 'none';
            pickElem.style.display = 'block';
            resultsElem.style.display = 'block';
            break;
        case 'ended':
            gameWinner.style.display = 'block';
            newGameBtn.innerText = 'Play again';
            newGameElem.style.display = 'block';
            pickElem.style.display = 'none';
            resultsElem.style.display = 'block';
            break;
        case 'notStarted':
        default:
            gameWinner.style.display = 'none';
            newGameElem.style.display = 'block';
            pickElem.style.display = 'none';
            resultsElem.style.display = 'none';
    }
}
setGameElements();

function newGame() {
    player.name = prompt('Please enter your name', player.name);
    if (player.name) {
        player.score = computer.score = 0;
        gameWinner.innerHTML = '';
        playerPickElem.innerHTML = computerPickElem.innerHTML = playerResultElem.innerHTML = computerResultElem.innerHTML = '...';
        gameState = 'started';
        setGameElements();

        playerNameElem.innerHTML = player.name;
        setGamePoints();
    }
}

function getComputerPick() {
    var possiblePicks = ['rock', 'paper', 'scissors'];
    return possiblePicks[Math.floor(Math.random()*3)];
}

function playerPick(playerPick) {
    var computerPick = getComputerPick();

    playerPickElem.innerHTML = playerPick;
    computerPickElem.innerHTML = computerPick;

    checkRoundWinner(playerPick, computerPick);
}

function checkRoundWinner(playerPick, computerPick) {
    playerResultElem.innerHTML = computerResultElem.innerHTML = '';

    var winnerIs = 'player',
        resultWin = '<span class="label label-success">Win</span>',
        resultLoss = '<span class="label label-danger">Loss</span>',
        resultRemis = '<span class="label label-warning">Remis</span>';

    if (playerPick == computerPick) {
        winnerIs = 'none'; // remis
    } else if (
        (computerPick == 'rock' &&  playerPick == 'scissors') ||
        (computerPick == 'scissors' &&  playerPick == 'paper') ||
        (computerPick == 'paper' &&  playerPick == 'rock')) {

        winnerIs = 'computer';
    }

    if (winnerIs == 'player') {
        playerResultElem.innerHTML = resultWin;
        computerResultElem.innerHTML = resultLoss;
        player.score++;
    } else if (winnerIs == 'computer') {
        playerResultElem.innerHTML = resultLoss;
        computerResultElem.innerHTML = resultWin;
        computer.score++;
    } else {
        playerResultElem.innerHTML = computerResultElem.innerHTML = resultRemis;
    }
    
    setGamePoints();
    checkGameWinner();
}

function setGamePoints() {
    playerPointsElem.innerHTML = player.score;
    computerPointsElem.innerHTML = computer.score;
}

function checkGameWinner() {
    if (player.score == 10) {
        gameWinner.innerHTML = '<div class="alert alert-success" role="alert">You win!</div>';
        gameState = 'ended';
    } else if (computer.score == 10) {
        gameWinner.innerHTML = '<div class="alert alert-danger" role="alert">You lose!</div>';
        gameState = 'ended';
    }
    setGameElements();
}
