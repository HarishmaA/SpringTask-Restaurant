	$("#retrieve").click(function() {
		
		var receipeIdRetrieve = $("#receipeIdRetrieve").val();

     
		if(receipeIdRetrieve.length==0){
			$(".error-messages-while-submitting").text("INPUT FIELD IS EMPTY!!!").fadeIn();
		return false;
	}


		var number_regex=/^[0-9]+$/;
		if(!receipeIdRetrieve.match(number_regex)){
			$(".error-messages-while-submitting").text("NOT A VALID INPUT!!!").fadeIn();
		return false;
	}
		$(".error-messages-while-submitting").empty().fadeOut();
	
			$.get('/retrieve', {
			"receipeId" : receipeIdRetrieve,
			"receipeName" : receipeNameRetrieve,	
		}, function(data) { // on success
			$(".message").text(data).fadeIn();
		}, "json").fail(function() { // on failure
			$(".message").text("INSERTION FAILED!!!  ID ALREADY EXISTS!!!").fadeIn();

		});
		$(".message").empty().fadeOut();
	});