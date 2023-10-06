const user = {
    userName: "Uday",
    price: "999",

    welcomeMessage: function(){
        console.log(`${this.userName}, welcome to website. `)
        console.log(this)
    }

}
// user.welcomeMessage()
// user.userName = "SAM"
// user.welcomeMessage()

// console.log(this)


// function one(){
//     const username = "Uday"
//     console.log(this.username)           //undefined
//     console.log(this)

// }
// one()

// const Two = function(){
//     const username = "Uday"
//     console.log(this.username)           //undefined
//     console.log(this)
// }
// Two()


const Two = () => {
    const username = "Uday"
    console.log(this.username)           //undefined
    console.log(this)
}
// Two()

// *********** implicit return *************

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3,4))

// *********** explicit return **************

// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "Uday"})

console.log(addTwo(3,4))