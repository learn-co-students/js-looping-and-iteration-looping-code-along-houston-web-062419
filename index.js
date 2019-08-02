// Code your solutions in this file

function writeCards(celebrant,birthday) {
    let celebrants = [];
    for (var i = 0; i < celebrant.length; i++) {
        celebrants.push(`Thank you, ${celebrant[i]}, for the wonderful ${birthday} gift!`);
    }
    return celebrants;
}
function countdown(n) {
    while (n >= 0) {
        console.log(n);
        n--;
    }
}

