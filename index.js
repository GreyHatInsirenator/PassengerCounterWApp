//document.getElementById("count-el").innerText = 5

// let count = 5
// count = count +1
// console.log(count)

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

console.log(saveEl)

function increment() {
    count +=1
    countEl.innerHTML = count
}

saveEl.innerText = dashSep
function save() {
    let dashSep = count + " - "
    saveEl.innerHTML += dashSep
    console.log(count)
    countEl.innerHTML = 0
    count = 0
}







// challenges---------------------------------------------------------------------------------------------------

// let myAge = 23
// console.log(myAge)
//-------------------------------------------------
// let myAge = 24
// let humanDogRatio = 7
// let myDogAge = myAge * humanDogRatio
// console.log(myDogAge)
//-------------------------------------------------
// let bonusPoints = 50
// console.log(bonusPoints)
// bonusPoints = bonusPoints + 50
// console.log(bonusPoints)
// bonusPoints = bonusPoints - 75
// console.log(bonusPoints)
// bonusPoints = bonusPoints + 45
// console.log(bonusPoints)
//--------------------------------------------------

// function number() {
//     console.log(42)
// }

// number()
//--------------------------------------------------

// let lap1 = 34
// let lap2 = 33
// let lap3 = 36
//                                                             let vaiables are block scoped i.e, they arn't accessible outside a particular block
// function total() {
//     let laptime = lap1 + lap2 + lap3
//     console.log(laptime)
// }

// total()
//-------------------------------------------------------

// let lapsCompleted = 0

// function Completed() {
//     lapsCompleted = lapsCompleted + 1
//     console.log(lapsCompleted)
// }

// Completed()
// Completed()
// Completed()
//----------------------------------------------------------

// let message = "You have three new notifications"
// console.log(message)

// let username = "sherlock"
// let message = "You have three new notifications"
// console.log(message + ", " + username + "!")

// let username = "sherlock"
// let message = "You have three new notifications"

// let messageToUser = message + ", " + username + "!"

// console.log(messageToUser)
//-----------------------------------------------------------

// let name = "Lily"
// let greeting = "Hello, My name is "

// let myGreeting = greeting + name + "!"
// console.log(myGreeting)
//-----------------------------------------------------------

// let name = 42
// let greeting = "Hello, My name is "

// let myGreeting = greeting + name + "!"
// console.log(myGreeting)

// let points = 4
// let bonusPoints = "10"

// let totalPoints = points + bonusPoints
// console.log(totalPoints)

// console.log(4 + 5) // 9
// console.log("2" + "4") // 24
// console.log("5" + 1)  //51
// console.log(100 + "100") //100100
//-------------------------------------------------------------










