function displayOrder(e) {
  let sizeOfPizza = document.querySelector('input[name="pizza-size"]:checked').value;
 
  // let crustPizza = document.querySelector("input[name="pizza-crust"]:checked").value;
  // let cheesey = document.querySelector("input[name="cheese"]:checked").value;
  // let veggies = document.querySelector("input[name="toppings"]:checked").value;

  e.preventDefault();

  if (sizeOfPizza=== small) {
    document.getElementById("orderTotal").innerHTML = "Your total order is KShs 500";
  } else if (sizeOfPizza=== medium) {
    document.getElementById("orderTotal").innerHTML = "Your total order is KShs 900";
  } else {
    document.getElementById("orderTotal").innerHTML = "Your total order is KShs 1200";
  }
}
  
//was trying to push the items selected onto an array below:
//   let newOrder = [];
//   $("input:checked[name="pizza-size"]:checked".each (function() {
//     newOrder.push($(this).val());
//   }));
//   $("#orderTotal").text(newOrder);
//   }));
// })

document.addEventListener("submit", displayOrder)