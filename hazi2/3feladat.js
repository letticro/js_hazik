//3. feladat
let numbers = [2, 3, 5, "ez egy string", 11, 24, 16, "ez is egy string", 44, 25, 24, "true", 98];
let amount = 0;

numbers.forEach(function (e) {
  if(isNaN(e)) {
    console.log('3.feladat: "' + e + '"' + " elem szám");
  } else {
    amount += e;
  }
});