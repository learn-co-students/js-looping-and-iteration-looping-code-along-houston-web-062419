function writeCards (names, cause)
{
  let cards = [];
  for (let i = 0; i < names.length; i++)
  {
    cards.push(`Thank you, ${names[i]}, for the wonderful ${cause} gift!`);
  }
  return cards;
}

function countdown(num)
{
  while (num >= 0) {
    console.log(num--);
  }
}
