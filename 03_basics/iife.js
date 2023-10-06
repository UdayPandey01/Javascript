// Immediately Invoked Function Expression (IIFE)

(function one(){
    console.log(`DB connected`)
})();                    // if we dont put semicolon(;) thhen it will show error

( (name) => {
    console.log(`DB connectedTwo ${name}`)
})("uday")

// global scope ke pollution se problem hoti hai kayi baar to uske jo bbhi pollution hai
// to uskko htane ke iife use krte