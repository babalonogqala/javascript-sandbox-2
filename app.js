

// new paragraph
// create new element 
 let createElement = document.createElement("p");
//  assign the content of the element
    createElement.textContent = "my new paragraph";

let newParagraph = document.querySelector("div");
// accessing the parent of the new created element

newParagraph.append(createElement); //appending the element so it appears on the page

// remove element
let paragraph = document.getElementById("paragraph");
paragraph.parentElement.removeChild(paragraph);


let importent = document.querySelector(".paragraph");

importent.innerHTML = " <br> this is just a <strong>Dummy </strong> text"

// adding event

let changeText = document.getElementById("read");

function clickedText(){ 
    changeText.innerHTML = "thank <b >you</b>";
    console.log(changeText);
}

changeText.addEventListener("click", clickedText);