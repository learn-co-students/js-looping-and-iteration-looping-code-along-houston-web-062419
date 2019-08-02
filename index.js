var names = ['Lisa', 'Kaitlin', 'Jan'];
var event = "surprise";

function writeCards(names, event) {
    var messages = [];
    for (let i=0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return messages
}
writeCards(names, event);


function countdown(number) {
    i=0;
    while(i <= number) {
        console.log(i++);
    }
}
countdown();