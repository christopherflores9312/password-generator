// Select the Generate Password button
var generateBtn = document.querySelector("#generate");

// Function to write the generated password to the page
function writePassword() {
  // Generate a new password
  var password = generatePassword();
  // Select the password text area
  var passwordText = document.querySelector("#password");
  // Set the value of the password text area to the generated password
  passwordText.value = password;
}

// Add a click event listener to the Generate Password button
generateBtn.addEventListener("click", writePassword);

// Function to generate a new password
function generatePassword() {
  // Define the character sets to use in the password
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";

  
}