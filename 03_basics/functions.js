function sayMyName(){
    console.log("u");
    console.log("D");
    console.log("A");
    console.log("Y");
}
// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2)
// }
// addTwoNumbers(3, 4)
const result = addTwoNumbers(4,5)
// console.log(result)             //undefined


function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    return(number1 + number2)
}

const result1 = addTwoNumbers(4,5)
// console.log(result1)


function loginUserMessage(username = "SAM"){
    if(username === undefined){                  //(!username)  we can also write like this 
        console.log("Please enter a username")
        return
    }
    return`${username} just logged in`
}
// console.log(loginUserMessage("Uday"))
console.log(loginUserMessage())                //Output: undefined just logged in



function calculatePriceCart1(num1){
    return num1
}
// console.log(calculatePriceCart1(200, 300, 500, 1000))         //it will return only 200

function calculatePriceCart (...num1){
    return num1
}
// console.log(calculatePriceCart(200, 300, 500, 1000))          // this will return an array of all element

function calculatePriceCart2(val1, val2, ...num1){
    return num1
}
// console.log(calculatePriceCart2(200, 300, 500, 1000))      // thsi will return an array excluded val1 and val2


const user = {
    username: "Uday",
    price:"999"
}
function handleObject(anyobject){
    // console.log(`username is ${anyobject.username} and the price is ${anyobject.price}`)
}
// handleObject(user)
handleObject({
    username: "UdayPandey",
    price: "9999"
})


const myArray = [200, 300, 1000, 400]

function returnArray(getArray){
    return getArray[1]
}
console.log(returnArray(myArray))