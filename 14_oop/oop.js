const userO = {
    username: "Uday",
    loginCount: "8",
    isLoggedIn: true,

    getUserDetail : function(){
        // console.log("Got user details from database")
        // console.log(`Username ${this.username}`)
        console.log(this)
    }
}
// console.log(user.username)
// console.log(user.getUserDetail())


function user(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welocome ${this.username}`)
    }
    return this
}

const userOne = new user("Uday", 5, 7)
const userTwo = new user("Pandey", 6, 7)

// console.log(userOne)

console.log(userOne.constructor)