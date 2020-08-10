function home()
{
	var fname= document.getElementById("Fname").value;
	var lname= document.getElementById("Lname").value;
	var email= document.getElementById("mailid").value;
	var phno= document.getElementById("phone").value;
	
	var letters = /^[0-9]+$/;
	var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

	if(fname=='')
	{
		alert('Please enter first name');
	}
	else if(lname=='')
	{
		alert('Please enter last name');
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
	else
	{	
		alert ('Thank you!');			                              
		window.location = "home.html"; 
	}
}