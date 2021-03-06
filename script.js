// list of possible characters
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var Numbers = "0123456789";
var specialChar = "!@#$%^&*()_+|?><:;";

//function to generate password
var generatePassword = function () {
	window.alert(
		"Your password must be between 8 and 128 characters long, and shall include the following character types; Lowercase Letters, Uppercase Letters, Numbers, and Special Characters."
	);
	var promptPasswordLength = window.prompt("How long would you like your password to be? Passwords must be between 8 and 128 characters long!");
	//Makes sure user gives acceptable length of password
	if (promptPasswordLength >= 8 && promptPasswordLength <= 128) {
		//user input for character criteria
		var confirmLowerCase = window.confirm("Would you like to include Lowercase letters?");
		var confirmUpperCase = window.confirm("Would you like to include Uppercase letters?");
		var confirmNumbers = window.confirm("Would you like to include numbers?");
		var confirmSpecialChar = window.confirm("Would you like to include special characters?");
		//shows error message if no character types are selected
		if (confirmLowerCase === false && confirmUpperCase === false && confirmNumbers === false && confirmSpecialChar === false) {
			window.alert("You must select atleast one character type to generate a password");
		} else {
			//logic to generate possible password characters from user input
			if (confirmLowerCase === true && confirmUpperCase === true && confirmNumbers === true && confirmSpecialChar === true) {
				var passwordOptions = lowerCase + upperCase + Numbers + specialChar;
			}
			if (confirmLowerCase === true && confirmUpperCase === true && confirmNumbers === true && confirmSpecialChar === false) {
				var passwordOptions = lowerCase + upperCase + Numbers;
			}
			if (confirmLowerCase === true && confirmUpperCase === true && confirmNumbers === false && confirmSpecialChar === true) {
				var passwordOptions = lowerCase + upperCase + specialChar;
			}
			if (confirmLowerCase === true && confirmUpperCase === false && confirmNumbers === true && confirmSpecialChar === true) {
				var passwordOptions = lowerCase + Numbers + specialChar;
			}
			if (confirmLowerCase === false && confirmUpperCase === true && confirmNumbers === true && confirmSpecialChar === true) {
				var passwordOptions = upperCase + Numbers + specialChar;
			}
			if (confirmLowerCase === true && confirmUpperCase === true && confirmNumbers === false && confirmSpecialChar === false) {
				var passwordOptions = lowerCase + upperCase;
			}
			if (confirmLowerCase === true && confirmUpperCase === false && confirmNumbers === false && confirmSpecialChar === true) {
				var passwordOptions = lowerCase + specialChar;
			}
			if (confirmLowerCase === true && confirmUpperCase === false && confirmNumbers === true && confirmSpecialChar === false) {
				var passwordOptions = lowerCase + Numbers;
			}
			if (confirmLowerCase === false && confirmUpperCase === true && confirmNumbers === true && confirmSpecialChar === false) {
				var passwordOptions = upperCase + Numbers;
			}
			if (confirmLowerCase === false && confirmUpperCase === true && confirmNumbers === false && confirmSpecialChar === true) {
				var passwordOptions = upperCase + specialChar;
			}
			if (confirmLowerCase === false && confirmUpperCase === false && confirmNumbers === true && confirmSpecialChar === true) {
				var passwordOptions = Numbers + specialChar;
			}
			if (confirmLowerCase === true && confirmUpperCase === false && confirmNumbers === false && confirmSpecialChar === false) {
				var passwordOptions = lowerCase;
			}
			if (confirmLowerCase === false && confirmUpperCase === true && confirmNumbers === false && confirmSpecialChar === false) {
				var passwordOptions = upperCase;
			}
			if (confirmLowerCase === false && confirmUpperCase === false && confirmNumbers === true && confirmSpecialChar === false) {
				var passwordOptions = Numbers;
			}
			if (confirmLowerCase === false && confirmUpperCase === false && confirmNumbers === false && confirmSpecialChar === true) {
				var passwordOptions = specialChar;
			}
			console.log(passwordOptions);

			//create for loop to choose password characters
			var password = "";
			for (var i = 0; i < promptPasswordLength; i++) {
				var password = password + passwordOptions.charAt(Math.floor(Math.random() * Math.floor(passwordOptions.length - 1)));
			}
			console.log(password);
			return password;
		}
	} else {
		window.alert("Error! Your password length must be between 8 and 128 characters long and entered in as a numeric value.");
	}
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
	var password = generatePassword();
	var passwordText = document.querySelector("#password");

	passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
