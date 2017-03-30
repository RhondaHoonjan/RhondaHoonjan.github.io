function askQuestions() {

	var firstName = prompt('What is your first name?').trim();
	var lastName = prompt('What is your last name?').trim();
	var fullName = firstName + '' + lastName;

	console.log(fullName);
	// above is just a diagnostic message

	var age = prompt('How old are you?');
	age = ParseInt(age);

	if (age >= 18) {

		console.log('User is an adult');

	} else if (age >= 13) {

		console.log('User is a teenager');

	} else {

		console.log('User is a child');

	}

	if (firstName.toLowerCase().trim() === 'general' && lastName.toLowerCase().trim !== 'assembly') {

		console.log('Greetings, General!');
	}	

}	
	




//When the page has loaded
$(function () {

		$('img').on('click', askQuestions);

	//When the user clicks an h3
	$('h3').on ('click', function (){

		//Toggle the next element
		$(this).next().slideToggle(50);

	});

});