$(document).ready(function() {
	$("#create").click(function() {
		
		var receipeIdCreate = $("#receipeIdCreate").val();
		var receipeNameCreate = $("#receipeNameCreate").val();
     
		if(receipeIdCreate.length==0||receipeNameCreate.length==0){
			$(".error-messages-while-submitting").text("INPUT FIELD IS EMPTY!!!").fadeIn();
		return false;
	}

		var name_regex = /^[a-zA-Z]+$/;
		var number_regex=/^[0-9]+$/;
		if(!receipeIdCreate.match(number_regex)||!receipeNameCreate.match(name_regex)){
			$(".error-messages-while-submitting").text("NOT A VALID INPUT!!!").fadeIn();
		return false;
	}
		$(".error-messages-while-submitting").empty().fadeOut();
	
			$.post('/create', {
			"receipeId" : receipeIdCreate,
			"receipeName" : receipeNameCreate,	
		}, function(data) { // on success
			$(".message").text(data).fadeIn();
		}, "json").fail(function() { // on failure
			$(".message").text("INSERTION FAILED!!!  ID ALREADY EXISTS!!!").fadeIn();

		});
		$(".message").empty().fadeOut();
	});

});
