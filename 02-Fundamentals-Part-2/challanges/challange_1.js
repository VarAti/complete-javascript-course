'use strict';

function calcAverage(score1, score2, score3) {
    const avg = ((score1 + score3 + score3) / 3).toFixed(2);
    return avg;
}

function checkWinner(avgTeam1, avgTeam2) {
    let winner = null;
    if (avgTeam2 >= avgTeam1 * 2) {
        winner = 'Dolphins';
    } else if (avgTeam1 >= avgTeam2 * 2) {
        winner = 'Koalas';
    } else {
        console.log('There is no team wins!');
        return;
    }
    console.log(`The winner is ${winner} with ${avgTeam2} vs ${avgTeam1}`);
}

// const avgKoalas = calcAverage(65, 54, 49);
const avgKoalas = calcAverage(23, 34, 27);
// const avgDolphins = calcAverage(44, 23, 71);
const avgDolphins = calcAverage(85, 54, 41);

checkWinner(avgKoalas, avgDolphins);
