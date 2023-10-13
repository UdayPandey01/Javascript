function SetUserName(username){
    this.username = username
}

function createUser(username, password, email){
    SetUserName.call(this, username)
    this.password = password
    this.email = email
}

const ani = new createUser("Uday", "1234", "uday@google.com")
console.log(ani)