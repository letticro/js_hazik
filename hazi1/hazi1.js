// 1.feladat
let nums = [3,4,9,6,2];

nums.forEach(function (e) {
  if (e % 2 === 0) {
    console.log(e + ': osztható');
  } else {
    console.log(e + ': nem osztható');
  }
});

// 2.feladat
let players = ['Peter', 'Kate', 'John'];
players.forEach(function (e, index) {
  console.log(index + '. ' + e);
});

// 3.feladat
let x = ['', 4, true];
let a = [];

x.forEach(function (e) {
  a.push(typeof e);
  console.log('a is now: ' + a);
});
console.log('Final version of a: [' + a + ']');
console.log(a);