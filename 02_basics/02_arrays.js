const mr_Hero =["a","b", "c"]
const dc_Hero =["M","N","O"]
// mr_Hero.push(dc_Hero)
// console.log(mr_Hero);
// console.log(mr_Hero[3][1]);

// const allHero = mr_Hero.concat(dc_Hero);
// console.log(allHero);

const all_new_Hero = [...mr_Hero, ...dc_Hero]
console.log(all_new_Hero);

const an_array =[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_an_array = an_array.flat(Infinity)
console.log(real_an_array);

console.log(Array.isArray("kavya"))
console.log(Array.from("kavya"))
console.log(Array.from({name: "kavya"}));