const bleachChar = ["Ichigo", "Aizen", "Ichibe"]
const opChar = ["Luffy", "Zoro", "Sanji"]

// bleachChar.push(opChar)
// console.log(bleachChar)

// const allChar = bleachChar.concat(opChar)
// console.log(allChar)

const allNewChar = [...bleachChar, ...opChar]
// console.log(allNewChar)

const newArray = [1, 2, 3, [4, 5, 6], 7, [5,6, [5, 8, 1]], 3]
const anotherNewArr = newArray.flat(1)
const anotherNewArr2 = newArray.flat(Infinity)

// console.log(anotherNewArr);
// console.log(anotherNewArr2);


console.log(Array.isArray("Uday"));
console.log(Array.from("Uday"));
console.log(Array.from({name : "Uday"}));       //interestinng case


let score = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score, score2, score3))