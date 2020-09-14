function signup()
{
	var uname= document.getElementById("Uname").value;
	var email= document.getElementById("mailid").value;
	var phno= document.getElementById("phone").value;
	var pwd= document.getElementById("Pass").value;			
	var cpwd= document.getElementById("Repass").value;	
	var letters = /^[0-9]+$/;
	var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

	if(uname=='')
	{
		alert('Please enter user name');
	}
	else if(email=='')
	{
		alert('Please enter your user email id');
	}
	else if (!filter.test(email))
	{
		alert('Please Enter valid form of email');
	}
	else if(phno=='')
	{
		alert('Please enter the phone number.');
	}
	else if(!letters.test(phno))
	{
		alert('Phone number field required only numeric characters');
	}
	else if(pwd=='')
	{
		alert('Please enter Password');
	}
	else if(cpwd=='')
	{
		alert('Enter Confirm Password');
	}
	else if(pwd != cpwd)
	{
		alert ('Password not Matched');
	}
	else if(document.getElementById("Pass").value.length < 4)
	{
		alert ('Password minimum length is 4');
	}
	else if(document.getElementById("Repass").value.length > 12)
	{
		alert ('Password max length is 12');
	}
	else
	{	
		alert ('Thank you! for creating account');			                              
		window.location = "home.html"; 
	}
}