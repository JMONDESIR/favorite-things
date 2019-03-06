const output = document.querySelector("#output")
const display = document.querySelector("#display")
const heading = document.createElement("h1")
output.appendChild(heading)
heading.textContent = "These are a few of my favorite things"

const thingFieldset = document.createElement("fieldset")
const thingLabel = document.createElement("label")
thingLabel.textContent = "Favorite thing: "
const thingInput = document.createElement("input")
thingFieldset.appendChild(thingLabel)
thingFieldset.appendChild(thingInput)

const placeFieldset = document.createElement("fieldset")
const placeLabel = document.createElement("label")
placeLabel.textContent = "Buy it at: "
const placeInput = document.createElement("input")
placeFieldset.appendChild(placeLabel)
placeFieldset.appendChild(placeInput)

const addButton = document.createElement("button")
addButton.textContent = "ADD"

output.appendChild(thingFieldset)
output.appendChild(placeFieldset)
output.appendChild(addButton)

addButton.addEventListener("click", () => {
        console.log(thingInput.value, placeInput.value)
        display.innerHTML = `<h2>I can purchase ${thingInput.value} at ${placeInput.value}.</h2>`
})
