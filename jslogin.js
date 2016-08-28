

var attempt = 3; /* declare a variable to count number of attempts*/

function validate(){
	var username = document.getElementById("username").value;    /*function executes on click of login button*/
	var password = document.getElementById("password").value;
	
	if (username == "lovebunny" && password =="sassy"){
		alert("Login is Complete");
		window.location = "success.html"; //Redirecting to the other page. This is not a real page!//
		return false;
	}
	else{
		attempt --; //decrementing by one.
		alert("You have left " +attempt+" attempt;"); /*this will disable or stop after 3 attempts*/
		
		if( attempt == 0){
			document.getElementById("username").disabled = true;
			document.getElementById("password").disabled = true;
			document.getElementByid("submit").disabled = true;
			return false;
		}
	}
}