
function calculateTotal()
{
  let unit_price={
    margherita: 450,
    pepperoni: 490,
    supreme: 600,
    hawaiian:490,    
  };
  let item_price={}
  
  item_price.margherita = ($("#qty_margherita").val() * unit_price.margherita )
  $("#price_margherita").val(item_price.margherita);
  
  item_price.pepperoni = ($("#qty_pepperoni").val() * unit_price.pepperoni )
  $("#price_pepperoni").val(item_price.pepperoni);
  
  item_price.supreme = ($("#qty_supreme").val() * unit_price.supreme )
  $("#price_supreme").val(item_price.supreme);  
  
  item_price.hawaiian = ($("#qty_hawaiian").val() * unit_price.hawaiian )
  $("#price_hawaiian").val(item_price.hawaiian);    
  
  let total = item_price.margherita + item_price.pepperoni + item_price.supreme + item_price.hawaiian;

 
  $("#total_value").text(total);
  
}

$(function()
 {
    $(".qty").on("change keyup",calculateTotal)
})

//delivery
document.getElementById("button").onclick = function() { let text;
  let person = prompt("Please enter your location:", "Lokichogio");
  if (person == null || person == "") {
    text = "User cancelled the prompt.";
  } else {
    text = "Hello " + person + "! How are you today?";
  } 
 }
// function myFunction() {
//   let text;
//   let person = prompt("Please enter your name:", "Harry Potter");
//   if (person == null || person == "") {
//     text = "User cancelled the prompt.";
//   } else {
//     text = "Hello " + person + "! How are you today?";
//   }
//   document.getElementById("demo").innerHTML = text;
// }