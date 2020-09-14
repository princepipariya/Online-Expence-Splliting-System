function forgetpassword() {
	var email = document.getElementById("Uname").value;
	var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if(email =='')
	{
		alert("Please enter user name.");
	}
	else if (!filter.test(email))
	{
		alert('Please Enter valid form of email');
	}
	else
	{
		alert("Thank you! Check your email box");
   		window.location = "index.html";
	}
}	