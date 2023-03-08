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

  // Prompt the user for the length of the password
  var passwordLength = prompt("Enter the length of the password (8-128 characters):");
  passwordLength = parseInt(passwordLength);

    // Validate the length of the password. While PW is not a number or doesn't meet length requirements...
  while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("Invalid input! Please enter a number between 8 and 128 for password length:");
    passwordLength = parseInt(passwordLength);
  }

  // Ask the user which character sets to include in the password
  var includeLowercase = confirm("Do you want to include lowercase characters?\nClick OK for Yes or Cancel for No");
  var includeUppercase = confirm("Do you want to include uppercase characters?\nClick OK for Yes or Cancel for No");
  var includeNumbers = confirm("Do you want to include numeric characters?\nClick OK for Yes or Cancel for No");
  var includeSpecialChars = confirm("Do you want to include special characters?\nClick OK for Yes or Cancel for No");

  // Validate that at least one character set is included in the password
  while (!includeLowercase && !includeUppercase && !includeNumbers && !includeSpecialChars) {
    alert("You must select at least one character type!");
    includeLowercase = confirm("Do you want to include lowercase characters?\nClick OK for Yes or Cancel for No");
    includeUppercase = confirm("Do you want to include uppercase characters?\nClick OK for Yes or Cancel for No");
    includeNumbers = confirm("Do you want to include numeric characters?\nClick OK for Yes or Cancel for No");
    includeSpecialChars = confirm("Do you want to include special characters?\nClick OK for Yes or Cancel for No");
  }

    // Build a string containing all the characters to include in the password
    var allChars = "";
    if (includeLowercase) {
      allChars += lowercaseChars;
    }
    if (includeUppercase) {
      allChars += uppercaseChars;
    }
    if (includeNumbers) {
      allChars += numericChars;
    }
    if (includeSpecialChars) {
      allChars += specialChars;
    }

    // Generate the password by randomly selecting characters from the allChars string
    var password = "";
    for (var i = 0; i < passwordLength; i++) {
      password += allChars.charAt(Math.floor(Math.random() * allChars.length));
    }

    // Return the generated password
    return password;
}