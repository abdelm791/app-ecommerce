$("#addit").click(function(){
  var productId = $("#productId").val();
  var productName = $("#productName").val();
  var productQuantity = $("#productQuantity").val();
  var data = {
    'product_id': productId,
    'product_name': productName,
    'quantity': productQuantity
  };

  $.post("/cart/add", data, showDone);
 });
 
 var showDone = function() {
  /* Make something happen here*/
 }

// prints "hi" in the browser's dev tools console
console.log("hi");
