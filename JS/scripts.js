$(document).ready(function (){
  $("h2").click(function () {
    $(".shown").show();
  });
});

function customerReceipt(e) {

  //Declare the cost of each pizza depending on the size
 var sizeOfPizza = document.querySelector('input[name="pizza-size"]:checked').value; 
 console.log("sizeOfPizza="+sizeOfPizza);
  var sizeCost = 0;
  if (sizeOfPizza === "small") {
    sizeCost = 500;
  }; 
  if (sizeOfPizza === "medium") {
    sizeCost = 900;
  }; 
  if (sizeOfPizza === "large") {
    sizeCost = 1200;
  }; 
  console.log("sizeCost="+sizeCost);

  //Setting the cost of the crust depending on the type
  let crust = document.querySelector('input[name="pizza-crust"]:checked').value; 
  // console.log("pizza-crust=" + crust);
  let crustCost = 0
  if (crust === "crispy-crust") {
    crustCost = 100;
  } else if (crust === "garlic-stuffed-crust") {
    crustCost = 200;
  } else if (crust === "gluten-free-crust") {
    crustCost = 300;
  }; 
  // console.log("crustCost=" + crustCost);

  //Setting the cost of the cheese depending on whether it's regular, medium or extra-loaded
  let cheese = document.querySelector('input[name="cheese"]:checked').value; 
  // console.log("cheese=" + cheese);
  let cheeseCost = 0
  if (cheese === "regular") {
    cheeseCost = 100;
  } else if (cheese === "medium") {
    cheeseCost = 250;
  } else if (cheese === "extra") {
    cheeseCost = 300;
  }; 
  
  // console.log("cheeseCost=" + cheeseCost);

  //Setting the cost of the toppings
  let toppings = document.querySelector('input[name="toppings"]:checked').value; 
  // console.log("toppings=" + toppings);
  let topCost = 0
  if (toppings === "Mixed Slice Mushrooms + Garlic") {
    topCost = 75;
  } else if (toppings === "Pepperoni + Black olives") {
    topCost = 150;
  } else if (toppings === "Ham & pineapple") {
    topCost = 100;
  } else if (toppings === "Potato, Sausage & Bacon") {
    topCost = 175;
  }; 
  
  // console.log("topCost=" + topCost);

  e.preventDefault();

  //Total Price to be invoiced
  let totalCost = (sizeCost + crustCost + cheeseCost + topCost);
  //  console.log("totalCost=" + totalCost);

  //Add the price to the customer order table
  $("#pizzasize").html(sizeOfPizza + " Pizza");
  $("#sizecost").html("Kshs" + sizeCost + ".00");
  $("#pizzacrust").html(crust + " Crust");
  $("#crustcost").html("Kshs" + crustCost + ".00");
  $("#pizzacheese").html(cheese + " Cheese");
  $("#cheesecost").html("Kshs" + cheeseCost + ".00");
  $("#pizzatoppings").html(toppings + " Toppings");
  $("#toppingscost").html("Kshs" + topCost + ".00");
  $("#totalcost").html("Kshs" + totalCost + ".00");

};

document.addEventListener('submit', customerReceipt)