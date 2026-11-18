//stack and heap

// stack => primitive
// heap => non primitive


let myobj = "Nikita"
let anoutherobj = myobj
anoutherobj = "Hello"
console.log(myobj);
console.log(anoutherobj);


let userOne ={
    email:"user@gmail.com",
    upi: 'user@ybl'
}

let userTwo = userOne
userTwo.email = "nikita@gmail.com"

console.log(userOne.email)
console.log(userTwo.email);


