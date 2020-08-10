function login()
{
	var uname = document.getElementById("Uname").value;
	var pwd = document.getElementById("Pass").value;
	//var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if(uname =='')
	{
		alert("Please enter user name.");
	}
	else if(pwd=='')
	{
    	alert("Please enter the password");
	}
	else if(pwd.length < 4 || pwd.length > 4)
	{
		alert("Password minimum and maximum length is 4.");
	}
	else
	{
   		window.location = "signup.html";
	}
}	