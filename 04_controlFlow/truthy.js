const userEmail = "Uday@gmail.com"

if (userEmail) {
    console.log("Got user email");
}
else{
    console.log("Dont't have user email");
}


const userEmail3 = []                   //empty array ko true maan liya

if (userEmail) {
    console.log("Got user email");
}
else{
    console.log("Dont't have user email");
}


const userEmail2 = ""                   //empty string hai to false maan liya
if (userEmail2) {
    console.log("Got user email");
}
else{
    console.log("Dont't have user email");
}


// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// "0", "false", " ", [], {}, function(){}

// if (userEmail3.length === 0) {
//     console.log("Array is empty")
// }

// const empObj = {}
// if (Object.keys(empObj).length === 0) {
//     console.log("Object is empty")
// }


// Nullish Coalesching Operstor(??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15          //15
// val1 = null ?? 10 ?? 20         //10


console.log(val1)

// turnery Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice>90 ? console.log("Greater than 90") : console.log("Less than 90")