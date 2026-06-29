const name = "kv"
const repo = 12
//console.log(name + repo+ "value"); // old

console.log('helo my name is ${name} and my repo is ${repo}');

const gameName = new String('kv-jain-com')
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(1));
console.log(gameName.indexOf("v"));
const newString = gameName.substring(0,4)
console.log(newString);

const anString = gameName.substring(-7,4)
console.log(anString);

const newst = "   kv   "
console.log(newst);
console.log(newst.trim());

const url ="http://kv.com/kavya%20jain"
console.log(url.replace('%20', '-'));

console.log(url.includes('sundar'));

console.log(gameName.split('-'));