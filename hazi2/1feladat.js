let names = [
  'Alfréd',
  'Béla',
  'Géza',
  'Árpád',
  'Pista',
  'Jóska',
  'Heráklész'
];

let position = names.indexOf('Pista');
if (position > 0) {
  console.log('Benne van a tömbben a(z) ' + (position + 1) + '. helyen');
}