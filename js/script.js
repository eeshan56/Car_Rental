function openTab(event, tabName) {
	var i, tablinks, tabcontent;

	tabcontent = document.getElementsByClassName("tabcontent");

	for(i = 0; i < tabcontent.length; i ++)
		tabcontent[i].style.display = "none";

	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i ++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	document.getElementById(tabName).style.display = "block";
	event.currentTarget.className += " active";
}

function validateEmail1() {
	var email = document.forms["SignUpForm"]["email1"].value;

	if(email === "" || email === null) {
    	document.getElementById("email_error1").innerHTML = "*Please enter your email";
    	return false;
    }

    if(email.indexOf("@", 0) < 0) {
    	document.getElementById("email_error1").innerHTML = "*Please enter a valid email address";
    	return false;
    }

    if(email.indexOf(".", 0) < 0) {
    	document.getElementById("email_error1").innerHTML = "*Please enter a valid email address";
    	return false;
    }

    document.getElementById("email_error1").innerHTML = "";
    return true;
}

function validateEmail2() {
	var email = document.forms["LoginForm"]["email2"].value;

	if(email === "" || email === null) {
    	document.getElementById("email_error2").innerHTML = "*Please enter your email";
    	return false;
    }

    if(email.indexOf("@", 0) < 0) {
    	document.getElementById("email_error2").innerHTML = "*Please enter a valid email address";
    	return false;
    }

    if(email.indexOf(".", 0) < 0) {
    	document.getElementById("email_error2").innerHTML = "*Please enter a valid email address";
    	return false;
    }

    document.getElementById("email_error2").innerHTML = "";
    return true;
}

function validatePhone() {
	var phone_number = document.forms["SignUpForm"]["ph_no"].value;

	if(phone_number === "" || phone_number === null) {
    	document.getElementById("ph_error").innerHTML = "*Please enter your phone number";
    	return false;
    }

    if(phone_number.length > 10 || phone_number.length < 10) {
    	document.getElementById("ph_error").innerHTML = "*Please enter a valid phone number";
    	return false;
    }

    if(isNaN(phone_number)) {
    	document.getElementById("ph_error").innerHTML = "*Please enter a valid phone number";
    	return false;
    }

    document.getElementById("ph_error").innerHTML = "";
    return true;
}

function validatePassword1() {
	var password = document.forms["SignUpForm"]["password1"].value;

	if(password === "" || password === null) {
		document.getElementById("passwd_error1").innerHTML = "*Please enter your password";
		return false;
	}

	if(password.length < 6 || password.length > 30) {
		document.getElementById("passwd_error1").innerHTML = "*Please enter a password of length between 6 and 30 (both inclusive)";
		return false;
	}

	var lowerCaseLetters = /[a-z]/g;
	if(!password.match(lowerCaseLetters)) {
		document.getElementById("passwd_error1").innerHTML = "*Password should contain a lowercase letter";
		return false;
	}

	var upperCaseLetters = /[A-Z]/g;
	if(!password.match(upperCaseLetters)) {
		document.getElementById("passwd_error1").innerHTML = "*Password should contain an uppercase letter";
		return false;
	}

	var numbers = /[0-9]/g;
	if(!password.match(numbers)) {
		document.getElementById("passwd_error1").innerHTML = "*Password should contain a number";
		return false;
	}

	document.getElementById("passwd_error1").innerHTML = "";
	return true;
}

function validatePassword2() {
	var password = document.forms["LoginForm"]["password2"].value;

	if(password === "" || password === null) {
		document.getElementById("passwd_error2").innerHTML = "*Please enter your password";
		return false;
	}

	if(password.length < 6 || password.length > 30) {
		document.getElementById("passwd_error2").innerHTML = "*Please enter a password of length between 6 and 30 (both inclusive)";
		return false;
	}

	var lowerCaseLetters = /[a-z]/g;
	if(!password.match(lowerCaseLetters)) {
		document.getElementById("passwd_error2").innerHTML = "*Password should contain a lowercase letter";
		return false;
	}

	var upperCaseLetters = /[A-Z]/g;
	if(!password.match(upperCaseLetters)) {
		document.getElementById("passwd_error2").innerHTML = "*Password should contain an uppercase letter";
		return false;
	}

	var numbers = /[0-9]/g;
	if(!password.match(numbers)) {
		document.getElementById("passwd_error2").innerHTML = "*Password should contain a number";
		return false;
	}

	document.getElementById("passwd_error2").innerHTML = "";
	return true;
}

function validateSignUp() {

	return validateEmail1() && validatePassword2() && validatePhone();
}

function validateLogin() {
	
	return validateEmail2() && validatePassword2();
}