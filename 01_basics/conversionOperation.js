let score = 54
let score1 = "54abc"

// console.log(typeof score)
// console.log(typeof score1)

let valueInNumber = Number(score1)
console.log(typeof valueInNumber)
console.log(valueInNumber)              //NaN => Not a number

let score2 = null

let valueInNumber2 = Number(score2)
console.log(typeof valueInNumber)
console.log(valueInNumber2)            //null => 0

let score3 = undefined

let valueInNumber3 = Number(score1)
console.log(typeof valueInNumber)
console.log(valueInNumber3)              //NaN => Not a Number

let score4 = true

let valueInNumber4 = Number(score1)
console.log(typeof valueInNumber)
console.log(valueInNumber4)              //true => 1 : false => 0

// 33 => 33
// "33" => 33
// "33abc" => NaN
// null => 0
// undefined => NaN
// true => 1 : false => 0


let isloggedIn = 1

let valueInNumber5 = Boolean(isloggedIn)
console.log(valueInNumber5)


// 1 => true; 0 => false
// "" => false
// "Uday" => true
