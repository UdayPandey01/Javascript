const myArr = [0, 1, 2, 3, 4, 5]
const animeChar = ["Naruto", "Zoro", "Luffy", "Asta", "Ichigo"]

// console.log(animeChar[3]);

const myArr2 = new Array(1, 2, 3, 4, 5)
// console.log(myArr2)


// Array methods

// myArr.push(6)
// myArr.push(8)
// myArr.pop()

myArr.unshift(98)
myArr.shift()

// console.log(myArr.includes(4))
// console.log(myArr.indexOf(4))

const newArr = myArr.join()

// console.log(myArr)
// console.log(newArr)
// console.log(typeof newArr)

// Slice, Splice

console.log("A ", myArr)

const myn1 = myArr.slice(1, 3)

console.log(myn1)
console.log("B ", myArr)

const myn2 = myArr.splice(1, 3)

console.log(myn2)
console.log("C ", myArr)