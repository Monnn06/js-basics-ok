var numArray = [];

function saveNumber() {
  var value = document.getElementById("num").value;

  if (value === "") {
    alert("Enter a number");
    return;
  }

  numArray[numArray.length] = Number(value);
  document.getElementById("output").innerHTML = "Array: " + numArray;

  document.getElementById("num").value = "";
}
