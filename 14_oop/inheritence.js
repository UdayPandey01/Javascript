class user {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`)
    }
}

class Teacher extends user {
    constructor(username, password, email){
        super(username)
        this.password = password
        this.email = email
    }

    addCourse(){
        console.log(`A new course is added by ${this.username}`)
    }
}

const chai = new Teacher("uday", "1212", "uday@fb.com")
chai.addCourse()

const masalachai = new user("Ichigo")
masalachai.logMe()

console.log(chai instanceof Teacher)
console.log(chai instanceof user)