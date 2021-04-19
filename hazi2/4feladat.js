// 4.feladat

let numbers = [2, 3, 5, "ez egy string", 11, 24, 16, "ez is egy string", 44, 25, 24, "true", 98];
let amount = 0;

numbers.forEach(function (e) {
  if(isNaN(e)) {
    let parse = parseInt(e);
    if(isNaN(parse)) {
      console.log("4. feladat: '" + e + "'" + " elemet nem tudtam átkonvertálni");
    } else {
      console.log("Sikerült a konvertálás: " + "'" + e + "'");
      amount += parse; 
    }
  } else {
    amount += e;
  }
})
console.log("Számok összege: " + amount);