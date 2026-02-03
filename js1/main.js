function checkForm() {
  var name = document.getElementById("username").value;
  var email = document.getElementById("useremail").value;
  var msg = document.getElementById("message");

  if (name.length < 1) {
    msg.innerHTML = "Name is required";
  } else if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
    msg.innerHTML = "Email is not valid";
  } else {
    msg.innerHTML = "Form is valid!";
  }
}
