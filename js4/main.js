
var home = document.getElementById("homeBtn");
var about = document.getElementById("aboutBtn");
var contact = document.getElementById("contactBtn");

home.addEventListener("click", function() {
  document.getElementById("pageTitle").innerText = "Home";
  document.getElementById("pageContent").innerText = "This is the Home page content.";
});

about.addEventListener("click", function() {
  document.getElementById("pageTitle").innerText = "About";
  document.getElementById("pageContent").innerText = "This is the About page content.";
});

contact.addEventListener("click", function() {
  document.getElementById("pageTitle").innerText = "Contact";
  document.getElementById("pageContent").innerText = "This is the Contact page content.";
});
