$(document).ready(function(){
	//we are trying to create a post everytime I refresh the page

	// when clicked
	$('#new-post').click(function() {
		//get the info from the inputs
		event.preventDefault(); 
		var b = $('.title').val();	
		var a = $('.msg').val();
		// make the request
		$.ajax({
			type: "POST",
			data: {
				title: b,
				text: a,
				user: "ehyoung"
			},
			url: "http://ga-wdi-api.meteor.com/api/posts",
			dataType: "JSON",
			success: function(response) {
				console.log(response);
			}	
		});
	});

	//trying to create a table that will automatically pull updates from the original site  
	$('#refresh').click(action);


	function action(){
		$.ajax({
			type: "GET",
			url: "http://ga-wdi-api.meteor.com/api/posts",
			dataType: "JSON",
			success: function(results) {
				for (var i = 0; i < results.length; i++) {
					// console.log( $('.message').text(results[i].text))
					// var owner = results[i].user;
					// // debugger
					// var id = results[i]._id;
					$('.responseRow').prepend(
						"<tr>" + 
						"<td>" + results[i]._id   + "</td>" + 
						"<td>" + results[i].title + "</td>" +
						"<td>" + results[i].text  + "</td>" +
						"<td>" + results[i].user  + "</td>" +
						"</tr>");
				}
			}
		});
		// console.log("It works!!") ------> This what you do to check if a function is working :D :D 
	}

setInterval(action, 3000);

});