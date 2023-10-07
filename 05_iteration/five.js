// for each

const coding = ["js", "python", "java", "c++", "ruby"]

coding.forEach(function (val){
    // console.log(val)
})

// coding.forEach((val) => {
//     console.log(val)
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr)
// })

const myCoding = [
    {
        languageName : "Js",
        languageFullName : "JavaScript"
    },
    {
        languageName : "rb",
        languageFullName : "ruby"
    },
    {
        languageName : "cpp",
        languageFullName : "C++"
    },
]
myCoding.forEach((item) => {
    console.log(item.languageFullName)
})