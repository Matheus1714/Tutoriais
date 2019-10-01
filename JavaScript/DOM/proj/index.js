// Get a DOM element body
body = document.getElementsByTagName("body")
// Create o DOM element
h1 = document.createElement("h1")
// Text in h1
textnode = "Meu projeto JavaScript"
// Put text in h1
h1.textContent = textnode
// connect element h1 in dom
body[0].appendChild(h1)

// Styles
h1.style.color = "blue"
h1.style.backgroundColor = "yellow"
h1.style.textAlign = "center"

// Create inputs
input1 = document.createElement("input")
input2 = document.createElement("input")

// Add type in inputs
input1.type = "number"
input2.type = "number"

// Create tag resp
resp   = document.createElement("p")


input1.classList.add("number1")
input2.classList.add("number2")

// connect elements in dom
body[0].appendChild(input1)
body[0].appendChild(input2)
body[0].appendChild(resp)

// Create button tag
button = document.createElement("button")

// Text in button
button.textContent = "Click"

// connect elements in dom
body[0].appendChild(button)

// If the button clicked
button.addEventListener("click", function(){
    // Get numbers
    number1 = document.getElementsByClassName("number1")
    number2 = document.getElementsByClassName("number2")
    // Sum numbers
    number3 = parseInt(number1[0].value) + parseInt(number2[0].value)
    // Change resp
    resp.textContent = number3
})



