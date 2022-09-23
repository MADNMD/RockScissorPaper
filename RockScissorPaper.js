function rockScissorPaper(playerTurn) {
    const rock = 'Rock';
    const scissor = 'Scissor';
    const paper = 'Paper';
    let computerTurn;

    if (playerTurn === 'r' || playerTurn === 'Rock') {
        playerTurn = rock;
    } else if (playerTurn === 's' || playerTurn === 'Scissor') {
        playerTurn = scissor;
    } else if (playerTurn === 'p' || playerTurn === 'Paper') {
        playerTurn = paper;
    } else {
        console.log(`Invalid input. Try again...`);
    }
    console.log(`Your choose ${playerTurn}`);

    let computer = Math.floor(Math.random() * 3) + 1;

    if (computer === 1) {
        computerTurn = rock;
    } else if (computer === 2) {
        computerTurn = scissor;
    } else if (computer === 3) {
        computerTurn = paper;
    }
    console.log(`The computer choose ${computerTurn}`);

    if (playerTurn === rock && computerTurn === scissor ||
        playerTurn === scissor && computerTurn === paper ||
        playerTurn === paper && computerTurn === rock) {
        console.log('You win!');
    } else if (computerTurn === rock && playerTurn === scissor ||
        computerTurn === scissor && playerTurn === paper ||
        computerTurn === paper && playerTurn === rock) {
        console.log('Computer win!');
    } else if (playerTurn === rock && computerTurn === rock ||
        playerTurn === scissor && computerTurn === scissor ||
        playerTurn === paper && computerTurn === paper) {
        console.log('This game was a draw!');
    }
}
rockScissorPaper('r');