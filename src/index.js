import "./styles.css"
import backgroundimg from "./pexels-kunal-lakhotia-781256899-29173121.jpg"

function init() {
    const content = document.querySelector(".content");
    const title = document.createElement("h1");
    title.classList.add("title");
    title.textContent = "The Lantern Restaurant"
    content.appendChild(title);

    const headingPhrase = document.createElement("p");
    headingPhrase.classList.add("headingPhrase");
    headingPhrase.textContent = "The perfect place to be when you desire a cozy dinner.";
    content.appendChild(headingPhrase);
}

init();