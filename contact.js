function form() {
    let name = document.getElementById("fName").value;
    let name2 = document.getElementById("lName").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let error_message = document.getElementById("error_message");

    error_message.style.padding = "10px";

    let text;
    if (name.length < 2 || name == null) {
        text = "Please Enter your first Name again";
        error_message.innerHTML = text;
        return false;
    }
    if (name2.length < 3 || name2 == null) {
        text = "Please Enter your last name again";
        error_message.innerHTML = text;
        return false;
    }
    if (isNaN(phone) || phone.length != 10) {
        text = "Please Enter your Phone Number again";
        error_message.innerHTML = text;
        return false;
    }
    if (email.indexOf("@") == -1 || email.length < 6 || email == null) {
        text = "Please Enter the correct Email";
        error_message.innerHTML = text;
        return false;
    }
    if (message.length <= 30 || message == null) {
        text = "Please Enter More Than 30 Characters";
        error_message.innerHTML = text;
        return false;
    }
    alert("the details have been send. thank you!");
    return true;
}