import "./styles.css"
import { contact } from "./contact.js"


const content = document.querySelector(".content");
const home = (() => {
    const title = document.createElement("h1");
    title.classList.add("title");
    title.textContent = "The Lantern Restaurant"

    const headingPhrase = document.createElement("p");
    headingPhrase.classList.add("headingPhrase");
    headingPhrase.textContent = "The perfect place to be when you desire a cozy dinner.";

    const buttonDiv = document.createElement("div");
    const bookButton = document.createElement("button");
    bookButton.textContent = "Book a seat now!";
    bookButton.classList.add("bookButton");
    buttonDiv.appendChild(bookButton);

    return { title, headingPhrase, buttonDiv }
})();

function setUpHome() {
    content.replaceChildren();
    content.appendChild(home.title);
    content.appendChild(home.headingPhrase);
    content.appendChild(home.buttonDiv);
}

function setUpContact() {
    content.replaceChildren();
    content.appendChild(contact.outerDiv);
}

document.addEventListener("DOMContentLoaded", () => {
    const homeButton = document.querySelector("#home");
    const menuButton = document.querySelector("#menu");
    const contactButton = document.querySelector("#contact");

    homeButton.addEventListener("click", setUpHome);
    contactButton.addEventListener("click", setUpContact);

    setUpHome();
});