let myDate = new Date()
console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());

// console.log(typeof myDate);                //object

let myCreatedDate = new Date(2023, 3, 23)
let myCreatedDate2 = new Date(2023, 3, 23, 5, 30)
let myCreatedDate3 = new Date("2023-03-20")
// console.log(myCreatedDate.toDateString())
// console.log(myCreatedDate2.toLocaleString())
// console.log(myCreatedDate3.toLocaleString())

let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(myCreatedDate3.getTime()) 

// console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
// console.log(newDate.getDate())
// console.log(newDate.getMonth() + 1)
// console.log(newDate.getFullYear())

newDate.toLocaleString('default',{
    weekday : "long"
})
console.log(newDate)