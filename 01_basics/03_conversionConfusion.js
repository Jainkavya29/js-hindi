let score = "33"
let score1 = "33abc"
console.log(typeof score);// method 1
console.log(typeof(score)); // 2
console.log(typeof(score1));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);

let valueInNumbe = Number(score1)
console.log(typeof valueInNumbe);
console.log(valueInNumbe);

//"33" = 33
// "33abs" = NaN
// true = 1 , false = 0 , ""= false, "kv "= true

// null

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

let num = 55
let stringNumber = String(num)
console.log(stringNumber);