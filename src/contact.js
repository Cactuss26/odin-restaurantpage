export const contact = (() => {
    const outerDiv = document.createElement("div");
    outerDiv.classList.add("contactDiv");

    const staffInfo = document.createElement("div");
    staffInfo.classList.add("staffInfo");
    staffInfo.innerHTML = "Contact Us<br><br>";
    const managerInfo = document.createElement("div");
    managerInfo.classList.add("managerInfo");
    managerInfo.innerHTML = 'Manager:<br><a href="mailto:manager-lr@gmail.com">manager-lr@gmail.com</a>\
    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" id="mail" viewBox="0 0 24 24">\
    <title>email</title>\
    <path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" /></svg><br>5555-555555\
    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" id="phone" viewBox="0 0 24 24">\
    <title>phone</title>\
    <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" /></svg>';

    const chefInfo = document.createElement("div");
    chefInfo.classList.add("chefInfo");
    chefInfo.innerHTML = 'Chef:<br><a href="mailto:chef-lr@gmail.com">chef-lr@gmail.com</a>\
    <svg xmlns="http://www.w3.org/2000/svg"width="20px" height="20px" id="mail" viewBox="0 0 24 24">\
    <title>email</title>\
    <path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" /></svg><br>6666-666666\
    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" id="phone" viewBox="0 0 24 24">\
    <title>phone</title>\
    <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" /></svg>';

    staffInfo.appendChild(managerInfo);
    staffInfo.appendChild(chefInfo);

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