

// new paragraph
// create new element 
 let createElement = document.createElement("p");
//  assign the content of the element
    createElement.textContent = "my new paragraph";

let newParagraph = document.querySelector("div");
// accessing the parent of the new created element

newParagraph.append(createElement); //appending the element so it appears on the page
