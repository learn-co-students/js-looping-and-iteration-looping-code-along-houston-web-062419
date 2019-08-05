function writeCards(array, event) {
    let thankYouCards = []
    for (let i = 0; i < array.length; i++){
        thankYouCards.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`)
    }
    return thankYouCards
}

function countdown(int) {
    while (int > 0) {
        console.log(int);
        int -=1;
    }
    console.log(int);
}