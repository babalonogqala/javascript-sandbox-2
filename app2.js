
// character counter
let inputElement = document.querySelector("input");
let rating = document.getElementById("rate");

function countChar(){
    let name = inputElement.value;
    let number = name.length;
    console.log(number);
}

inputElement.addEventListener("input", countChar);