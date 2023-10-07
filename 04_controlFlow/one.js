// if

const isUserLogged = true

if (isUserLogged) {
    
}

// <, >, <=, >=, ==, !=, ===, !==

// const temperature = 37
// if (temperature < 50) {
//     console.log("Temperature is less than 50")
// }
// else{
// console.log("Temperature is greater than 50")
// }

// const score = 200

// if (score > 100) {
//     const power = "Fly"
//     console.log(`User Power: ${power}`)
// }
// console.log(`User Power: ${power}`)               //this will show error because of scope


// const balance = 1000
// if (balance < 500) {
//     console.log("balance is less than 500")
// } 
// else if(balance < 750){
//     console.log("balance is less than 750")
// }
// else if(balance < 900){
//     console.log("balance is less than 900")
// }
// else{
//     console.log("balance is less than 1200")
// }


const userLoggedIn = true
const debitCard = true

if (userLoggedIn && debitCard && 2==2) {
    // console.log("Allow to buy courses")
}

const userLoggedInFromGoogle = false
const userLoggedInFromGmail = true

if (userLoggedInFromGoogle || userLoggedInFromGmail) {
    console.log("Allow to buy courses")
}

