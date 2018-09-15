//function onDelete() {
//	 const ul = document.getElementById(''); // Get the list where we will place our authors
//	  const url = 'https://localhost:8080/delete?results=10';
//	  fetch(url)
//	  .then((resp) => resp.json())
//	  .then(function(data) { 
//		  alert(data);
//		  })
//	  .catch(function(error) {
//	    console.log(error);
//	  }); 
//}
//fetch('https://www.reddit.com/r/javascript/top/.json?limit=5')
//.then(res => res.json())
//.then(json => console.log(json));
//
function onDelete() {
	  var xhttp = new XMLHttpRequest();
	  xhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	      document.getElementById("demo").innerHTML = this.responseText;
	    }
	  };
	  xhttp.open("GET", "delete?receipeId=1", true);
	  xhttp.send();
	}

function onUpdate() {
	  var xhttp = new XMLHttpRequest();
	  xhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	      document.getElementById("demo").innerHTML = this.responseText;
	    }
	  };
	  xhttp.open("GET", "update?receipeId=1&&receipeName=naan", true);
	  xhttp.send();
	}

//function onDelete() {
//	fetch(“/delete”) //returns a promise
//	  .then(res => res.json()) //here we're returning another promise that res.json() returns when the data is ready
//	  .then(data => console.log(“I have the data!”, data)); //result of unwrapping the previously returned promise
//	
//}


//function onDelete() {
//
//fetch(withQuery("/delete",{receipeId:'receipeId'})
//.then(response => response.json())
//.then(data => {
//  console.log(data) // Prints result from `response.json()` in getRequest
//})
//.catch(error => console.error(error))
//}





