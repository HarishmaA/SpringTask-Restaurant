	$("#update").click(function() {
		
		var receipeIdUpdate = $("#receipeIdUpdate").val();
		var receipeNameUpdate = $("#receipeNameUpdate").val();
     
		if(receipeIdUpdate.length==0||receipeName.length==0){
			$(".error-messages-while-submitting").text("INPUT FIELD IS EMPTY!!!").fadeIn();
		return false;
	}

		var name_regex = /^[a-zA-Z]+$/;
		var number_regex=/^[0-9]+$/;
		if(!receipeIdUpdate.match(number_regex)||!receipeNameUpdate.match(name_regex)){
			$(".error-messages-while-submitting").text("NOT A VALID INPUT!!!").fadeIn();
		return false;
	}
		$(".error-messages-while-submitting").empty().fadeOut();
	
			$.get('/update', {
			"receipeId" : receipeIdUpdate,
			"receipeName" : receipeNameUpdate,	
		}, function(data) { // on success
			$(".message").text(data).fadeIn();
		}, "json").fail(function() { // on failure
			$(".message").text("INSERTION FAILED!!!  ID ALREADY EXISTS!!!").fadeIn();

		});
		$(".message").empty().fadeOut();
	});