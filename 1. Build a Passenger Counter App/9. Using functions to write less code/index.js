// let name = 42
// let greeting = "Hi, my name is "
// let myGreeting = greeting + name
// // console.log(myGreeting)

// let points = 4
// let bonusPoints = "10"
// let totalPoints = points + bonusPoints

// console.log(points + bonusPoints)

let welcomeEl = document.getElementById("welcome-el")
let name = "Sharujan Sriramasothy"
let greeting = "Welcome back, "

welcomeEl.innerText = greeting + name

welcomeEl.innerText += "👋"