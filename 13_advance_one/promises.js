const promiseOne = new Promise(function(resolve, reject){
    //Do async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log("Async task is completed")
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("Promise consumed")
})




new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log("Async task 2")
        resolve()
    }, 1000);
}).then(() => {
    console.log("Async 2 resolved")
})





const promiseThree = new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve({username : "Uday Pandey", email: "uday@udayp.com"})
    }, 1000);
})

promiseThree.then(function(user){
    console.log(user)
})





const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let err = true
        if(!err){
            resolve({username: "Uday Pandey", pass: "1234"})
        }else{
            reject('ERROR, Something went wrong')
        }
    },1000)
})
promiseFour
.then(function(user){
    console.log(user)
    console.log(user.username)
})
.then(function(username){
    console.log(username)
})
.catch(function(error){
    console.log(error)
})
.finally(() => console.log('Promise is either resolved or rejected'))





const promiseFIve = new Promise(function(resolve,reject){
    setTimeout(function(){
        let err = false
        if(!err){
            resolve({username: "JavaScript", pass: "1234"})
        }else{
            reject('ERROR, JS went wrong')
        }
    },1000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFIve
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}
consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users') 
//         const data = await response.json()
//         console.log(data)
//     } catch (error) {
//         console.log('E: ', error)
//     }
// }
// getAllUsers()


fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data)
})
.catch((error) => console.log(error))