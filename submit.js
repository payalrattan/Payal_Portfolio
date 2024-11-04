
function validation() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
    var text;

    error_message.style.padding = "10px";

    if (name.length < 5) {
        text = "Please enter a valid name";
        error_message.innerHTML = text;
        return false;
    }
    if (email.indexOf('@') == -1 || email.length < 10) {
        text = "Please enter a valid email-id";
        error_message.innerHTML = text;
        return false;
    }
    if (message.length <= 80) {
        text = "Please enter more than 80 characters";
        error_message.innerHTML = text;
        return false;
    }
    alert("Message has sent");
    return true;
} 

