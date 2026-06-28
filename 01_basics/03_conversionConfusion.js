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

// operations
console.log("1"+ 2 + 2);
console.log(2+2+"1");
console.log(+true);
console.log(true+); // error
console.log(+"");

// prefix
let x = 3;
const y = x++;
console.log(x,y);
//postfix
let a = 1;
const b = ++a;
console.log(a,b);
