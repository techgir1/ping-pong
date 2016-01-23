var pingPong = function(inputNumber) {

  var range = [];

  for (var i = 1; i <= inputNumber; i++) {

    if (i % 15 === 0) {
      range.push("pingpong");
    }
    else if (i % 5 === 0) {
      range.push("pong");
    }
    else if (i % 3 === 0) {
      range.push("ping"); 
    }
    else {
      range.push(i);
    }
  };
  return range;
};
  
$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    $("ul").empty();
    
    var inputNumber = $("input#inputNumber").val();
    var result = pingPong(inputNumber);

    for (i = 0; i < result.length; i ++) {
      // $("#result").prepend("<li>" + result[i] + "</li>");
      $("#result").append("<li>" + result[i] + "</li>");
    };

    event.preventDefault();
  });
});








