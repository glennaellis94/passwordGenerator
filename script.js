// Assignment code here
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var Numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "|", "?", ">", "<", ":", ";"];

var confirmLowerCase = window.confirm("Would you like to include lowercase letters?");
var confirmUpperCase = window.confirm("Would you like to include uppercase letters?");
var confirmNumbers = window.confirm("Would you like to include numbers?");
var confirmSpecialChar = window.confirm("Would you like to include special characters?");
var promptPasswordLength = window.prompt("How long would you like your password to be? Passwords must be between 8 and 128 characters long!");

if (confirmLowerCase === true && confirmUpperCase === true && confirmNumbers === true && confirmSpecialChar === true) {
	var passwordOptions = lowerCase + upperCase + Numbers + specialChar;
	/* for (i=0,i<promptPasswordLength,i++){
    var password=
  }*/
}
if (confirmLowerCase === true && confirmUpperCase === true && confirmNumbers === true && confirmSpecialChar === flase) {
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
if (confirmLowerCase === true && confirmUpperCase === flase && confirmNumbers === false && confirmSpecialChar === true) {
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
