$(document).ready(function () {
  $("h2").click(function () {
    $(".shown").show();
  });
});

//Remember to check the value with .value against that which is in the HTML
//Set the cost of the pizza
function checkButton() {
  var sizeOfPizza = document.querySelector('input[name="size"]:checked');
  console.log(sizeOfPizza.value + " pizza");
  var sizeCost = 0;
  if (sizeOfPizza.value === "Small") {
    sizeCost = 500;
  };
  if (sizeOfPizza.value === "Medium") {
    sizeCost = 900;
  };
  if (sizeOfPizza.value === "Large") {
    sizeCost = 1200;
  };
  console.log("sizeCost=" + sizeCost);

  //Setting the cost of the crust depending on the type

  var crust = document.querySelector('input[name="pizza-crust"]:checked');
  console.log(crust.value + " crust");
  var crustCost = 0
  if (crust.value === "Crispy") {
    crustCost = 100;
  } else if (crust.value === "Garlic-stuffed") {
    crustCost = 200;
  } else if (crust.value === "Gluten-free") {
    crustCost = 300;
  };
  console.log("crustCost=" + crustCost);

  //Setting the cost of the cheese depending on whether it's regular, medium or extra-loaded

  var cheese = document.querySelector('input[name="cheese"]:checked')
  console.log(cheese.value + " cheese");
  var cheeseCost = 0
  if (cheese.value === "Regular") {
    cheeseCost = 100;
  } else if (cheese.value === "Medium") {
    cheeseCost = 250;
  } else if (cheese.value === "Extra") {
    cheeseCost = 300;
  };
  console.log("cheeseCost=" + cheeseCost);

  //Setting the cost of the toppings
  var toppings = document.querySelector('input[name="toppings"]:checked');
  console.log(toppings.value + " toppings");
  var topCost = 0
  if (toppings.value === "Mushrooms") {
    topCost = 75;
  } else if (toppings.value === "Pepperoni") {
    topCost = 150;
  } else if (toppings.value === "Ham-pineapple") {
    topCost = 100;
  } else if (toppings.value === "Potato-bacon") {
    topCost = 175;
  };

  console.log("topCost=" + topCost);

  var delivery = document.querySelector('input[name="delivery"]:checked');
  console.log(delivery.value);

  var deliveryCost = 0
  if (delivery.value === "Yes") {
    prompt("Please enter your location: ");
    alert("Your pizza will be delivered to your location :)")
    deliveryCost = 250;
  } else if (delivery.value === "No") {
    alert("Time for some yum! Your pizza will be ready in the next hour.")
  }

  // e.preventDefault();

  //Total Price to be invoiced
  let totalCost = (sizeCost + crustCost + cheeseCost + topCost + deliveryCost);
  console.log("totalCost=" + totalCost);

  //Add the price to the customer order table
  $("#pizzasize").html(sizeOfPizza.value + " Pizza");
  $("#sizecost").html("Kshs" + sizeCost + ".00");
  $("#pizzacrust").html(crust.value + " Crust");
  $("#crustcost").html("Kshs" + crustCost + ".00");
  $("#pizzacheese").html(cheese.value + " Cheese");
  $("#cheesecost").html("Kshs" + cheeseCost + ".00");
  $("#pizzatoppings").html(toppings.value + " Toppings");
  $("#toppingscost").html("Kshs" + topCost + ".00");
  $("#pizzadelivery").html(delivery.value + ",for delivery");
  $("#deliverycost").html("Kshs" + deliveryCost + ".00");
  
  $("#totalcost").html("Kshs" + totalCost + ".00");

};