// var c = 300
let a = 200
if(true){
    let a = 10
    const b = 100
    // var c = 30
    // console.log("Inner" , a)
}
// console.log(a)
// console.log(b)
// console.log(c)

function one(){
    const userName = "Uday"
    function two(){
        const website = "youtube"
        console.log(userName)
    }
    // console.log(website)
    two()
}
// one()

if (true) {
    const userName = "Uday"
    if (userName === "Uday") {
        const website = " youtube"
        // console.log(userName + website)
    }
    // console.log(website)
}
// console.log(userName)


// console.log(addOne(5))
function addOne(num){
    return num +1
}


addTwo(5)
const addTwo = function(num){
    return num + 2
}