var pingPong = function(userInput) {
	var range = [];
    for(var i = 1; i <= userInput; i++) {

    	if(i % 15 === 0) {
    		range.push("pingpong");
    	}
    	else if(i % 3 === 0) {
    		range.push("ping");
    	}
    	else if(i % 5 === 0) {
    		range.push("pong");
    	}
    	else {
    		range.push(i);
    	}
    };
    return range;
};

$(document).ready(function() {
	$("form#pingPong").submit(function(event) {

		var userInput = $("input#userInput").val();
		var result = pingPong(userInput);

		for(i = 0; i < result.length; i ++) {
			$("#result").append("<li>"+result[i]+"</li>");

	};

	event.preventDefault();
	
  });
});