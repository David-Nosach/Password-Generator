// Assignment code here
function generatePassword() {
  while (true) {
    var lengthChar = prompt("How many charcters would you like? (8-128)");
    if (lengthChar <= 128 && lengthChar >= 8) {
      break;
    }
    alert("Password length must be 8 to 128 characters long!");
  }

  // var lengthChar = prompt("Length of Password (8-128 characters)");

  // if (lengthChar < 8 || lengthChar > 128) {
  //   alert("make length be between 8 - 128");
  // } else {
  //   return lengthChar;
  // }

  var lowerChar = confirm("Do you want lowercase characters?");
  var upperChar = confirm("Do you want uppercase characters?");
  var numberChar = confirm("Do you want numbers?");
  var specialChar = confirm("Do you want special characters?");

  return lengthChar + lowerChar + upperChar + numberChar + specialChar;
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
