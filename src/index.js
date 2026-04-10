import "./styles.css"

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
