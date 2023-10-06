//singelton
//object.create 

//object literals

const mySym = "Key 1"

const jsUser = {
    name : "Uday",
    age : 19,
    [mySym] : "myKey1",                     //correct way to represent Symbol as a key
    email : "uday37@yahoo.com",
    "Full name" : "Uday Pandey",
    isLoggedIn : false,
    location : "Uttar Pradesh",
    lastLoginDays : ["Monday", "Wednesday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser.full name);          //show error
// console.log(jsUser["Full name"]);
// console.log(jsUser["mySym"]);

jsUser.email = "uday23@google.com"         //new value alloted
// Object.freeze(jsUser)

jsUser.email = "uday23@microsoft.com" 
// console.log(jsUser)

jsUser.greetings = function(){
    console.log("Hello JS User")
}

jsUser.greetings2 = function(){
    console.log(`Hello JS user, ${this.name}`)
}
console.log(jsUser.greetings())        
console.log(jsUser.greetings2())
