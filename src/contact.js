export const contact = (() => {
    const outerDiv = document.createElement("div");
    outerDiv.classList.add("contactDiv");

    const staffInfo = document.createElement("div");
    staffInfo.classList.add("staffInfo");

    const feedBack = document.createElement("div");
    feedBack.classList.add("feedBack");
    feedBack.innerHTML = "FeedBack<br><br>";

    const feedBackForm = document.createElement("form");
    feedBackForm.action = "./";
    const inputField = document.createElement("textarea");
    inputField.cols = 20;
    inputField.rows = 10;
    const inputLabel = document.createElement("label");
    inputField.id = "feedback";
    inputLabel.for = inputField.id;
    inputLabel.classList.add("inputLabel");
    inputLabel.textContent = "Tell us what you liked (or disliked)!";
    const submitButton = document.createElement("button");
    submitButton.classList.add("submitButton");
    submitButton.textContent = "Submit";
    
    feedBackForm.appendChild(inputLabel);
    feedBackForm.appendChild(inputField);
    feedBackForm.appendChild(submitButton);
    feedBack.appendChild(feedBackForm);
    

    outerDiv.appendChild(staffInfo);
    outerDiv.appendChild(feedBack);
    return { outerDiv }
})();