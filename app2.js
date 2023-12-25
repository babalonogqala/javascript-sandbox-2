// character counter
// let inputElement = document.querySelector('input')
// let rating = document.getElementById('rate')

// function countChar () {
//   let name = inputElement.value
//   let number = name.length
//   console.log(number)
// }

// inputElement.addEventListener('input', countChar)

// first step is to declare the variables of the input and span char
let userInputChar = document.getElementById('product-name')
let numOfchar = document.getElementById('remaining-chars')

// third step is to create a funtion that will track the char number and display changes(remaining char)
function calculateChar (Product, array) {
  //
  let trackInput = userInputChar.value //take the value of the input
  let charLength = trackInput.length

  let classColor = (numOfchar.style.color = 'blue')
  let numOfcharElement = charLength - 60

  numOfchar.textContent = numOfcharElement
  if ((numOfcharElement = 10)) {
    numOfcharElement.classColor
  } else {
  }
}
// second step is to add event to the input element and track it
userInputChar.addEventListener('input', calculateChar)
