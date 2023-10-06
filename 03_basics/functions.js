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
