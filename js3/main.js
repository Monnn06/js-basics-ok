function getTotal(price, rate) {
  return price + (price * rate / 100);
}

function compute() {
  var price = Number(document.getElementById("amount").value);
  var tax = Number(document.getElementById("taxRate").value);

  var finalPrice = getTotal(price, tax);
  document.getElementById("total").innerHTML = "Total: " + finalPrice;
}
