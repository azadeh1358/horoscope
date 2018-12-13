$(document).ready(function() {
  $(document).on('click', '.sign-name', function(e) {
		e.preventDefault()

	}
}


var order = {

  orderId: 12345,
}


// bring a text by clicking on the button:

  $("#back-button hide").on("click", function(e) {
    e.preventDefault();
    // $("#listContainer").remove();
    // $("#exampleList").append("<li>example</li>");
      $("#exampleList").append(order.orderId);
  });

  // jason file call
  $.get('example.com/awesome-information', function(data) {
  console.log(data)
})
