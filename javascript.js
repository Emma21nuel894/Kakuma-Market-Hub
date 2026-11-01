function showMessage(section) {
    alert("Welcome to " + section);
}

function registerMeeting() {
    const name = prompt("Enter your name to register:");

    if (name && name.trim() !== "") {
        alert("Thank you " + name + "! Your demo registration is received.");
    }
}

function learnLanguage() {
    const language = document.getElementById("language").value;

    document.getElementById("languageResult").textContent =
        "Welcome! You selected " + language + " language learning.";
}

function addPost() {
    const input = document.getElementById("postInput");
    const post = input.value.trim();

    if (post === "") {
        alert("Please write something first.");
        return;
    }

    const item = document.createElement("div");
    item.className = "card";

    const paragraph = document.createElement("p");
    paragraph.textContent = post;

    item.appendChild(paragraph);

    document.getElementById("posts").prepend(item);

    input.value = "";
}