const weight = document.querySelector(".weight")
const height = document.querySelector(".height")
const button = document.querySelector("button")
const answer = document.querySelector(".answer")
console.log(typeof weight);

button.addEventListener("click", (e)=>{
    e.preventDefault()
    let Ans = weight.value / (height.value * height.value)
    answer.textContent = `Anwer is: ${Ans} `

})

// function calculateBMI ()