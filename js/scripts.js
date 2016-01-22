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