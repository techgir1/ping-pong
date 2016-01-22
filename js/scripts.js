var pingPong = function(inputNumber) {

  var rangeCount = [];

  for (var i = 1; i <= inputNumber; i++) {

    if (i % 15 === 0) {
      rangeCount.push("pingpong");
    }
    else if (i % 5 === 0) {
      rangeCount.push("pong");
    }
    else if (i % 3 === 0) {
      rangeCount.push("ping");
    }
    else {
      rangeCount.push(i);
    }
  };
  return rangeCount;
};


$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {

    var inputNumber = $("input#inputNumber").val();
    var result = pingPong(inputNumber);

    for (i = 0; i < result.length; i ++) {
      $("#result").prepend("<li>" + result[i] + "</li>");
    };

    event.preventDefault();
  });
});