// Assignment code here
function generatePassword(
  lengthChar,
  chooseLc,
  chooseUc,
  chooseNum,
  chooseSymb
) {
  // types of characters
  var lc = "abcdefghijklmnopqrstuvwxyz";
  var uc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var num = "0123456789";
  var symb = "{}()#[],!_@/:;.|`$=+-*^?&~%'";

  var includedChars = "";
  var password = "";

  // check for type of characters user chose
  includedChars += chooseLc ? lc : "";
  includedChars += chooseUc ? uc : "";
  includedChars += chooseNum ? num : "";
  includedChars += chooseSymb ? symb : "";

  if (includedChars.length === 0) {
    return "Password must have at least one character type";
  }

  // Add proper password length and randomize characters
  for (var i = 0; i < lengthChar; i++) {
    var randomized = Math.floor(Math.random() * includedChars.length);
    password += includedChars[randomized];
  }
  return password;
}

// Get reference to the #generate element
var generateBtn = document.querySelector("#generate");

// Function to handle generating and displaying password
function writePassword() {
  // Prompt for password length
  var lengthChar = prompt("How many characters would you like? (8-128)");
  if (lengthChar <= 128 && lengthChar >= 8) {
    // Prompt for character types
    var chooseLc = confirm("Would you like lowercase characters?");
    var chooseUc = confirm("Would you like UPPERCASE characters?");
    var chooseNum = confirm("Would you like numbers?");
    var chooseSymb = confirm("Would you like symbols?");

    // Generate password based on user choices
    var password = generatePassword(
      lengthChar,
      chooseLc,
      chooseUc,
      chooseNum,
      chooseSymb
    );

    // Display generated password
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  } else {
    alert("Password length must be 8 to 128 characters long!");
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
