const accountId = 2362389
let accountEmail = "uday123@gmail.com" 
var accountPassword = "25363"
accountCity = "Kanpur"
let accountState;

// accountId = 3452        // we cannot change value in const
console.log(accountId)

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

accountEmail = "Uday425@gmail.com"
accountPassword = "67322"
accountCity = "Jaipur"

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])