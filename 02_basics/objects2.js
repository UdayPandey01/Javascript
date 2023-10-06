// const tinderUser = new Object()         //Singelton object

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sam" 
tinderUser.loggedIn = false

// console.log(tinderUser);

const realUser = {
    email: "some@gmail.com",
    fullname:{
        userFullName: {
            firstName: "uday",
            lastName: "Pandey"
        }
    }
}
// console.log(realUser.fullname.userFullName.firstName)

const obj1 = {1: "A", 2: "B"}
const obj2 = {4: "D", 3: "C"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}
// console.log(obj3)


const user = [
    {
        id:1,
        email: "user@yahoo.com"
    },
    {
        id: 2,
        email: "user2@yahoo.com"
    },
    {
        id: 3,
        email: "user3@gmail.com"
    },
]
user[1].email

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isLoggedIn"))

const course = {
    course: "JS",
    price: "999",
    courseTeacher: "Uday"
}
// course.courseTeacher

const {courseTeacher} = course
const {courseTeacher: Teacher} = course      //we can also give name if the given name is long
console.log(courseTeacher)
console.log(Teacher)


// {
//     "name": "Uday"
//     "courseName": "JavaScript"                //this is JSON API
//     "price": "999"
// }