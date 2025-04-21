const urlAPI = "https://api.adviceslip.com/advice"

let adviceNumber = document.querySelector("#adviceNumber")
let containerAdviceText = document.querySelector("#containerAdviceText")

let buttonSort = document.querySelector("#buttonSort")

buttonSort.addEventListener("click", sortAdvice)

async function sortAdvice() {
    let response = await fetch(urlAPI)
    let data = await response.json()

    console.log(data)

    adviceNumber.textContent = data.slip.id
    containerAdviceText.textContent = data.slip.advice
}

window.addEventListener("load", sortAdvice)