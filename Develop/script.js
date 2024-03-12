// Assignment code here
function generatePassword(
  lengthChar,
  chooseLc,
  chooseUc,
  chooseNum,
  chooseSymb
) {
  var lc = "abcdefghijklmnopqrstuvwxyz";
  var uc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var num = "0123456789";
  var symb = "{}()#[],!_@/:;.|`$=+-*^?&~%'";

  var includedChars = "";
  var password = "";

  includedChars += chooseLc ? lc : "";
  includedChars += chooseUc ? uc : "";
  includedChars += chooseNum ? num : "";
  includedChars += chooseSymb ? symb : "";

  if (includedChars.length === 0) {
    return "Password must have at least one character type";
  }

  for (var i = 0; i < lengthChar; i++) {
    var randomized = Math.floor(Math.random() * includedChars.length);
    password += includedChars[randomized];
  }
  return password;
}

while (true) {
  var lengthChar = prompt("How many charcters would you like? (8-128)");
  if (lengthChar <= 128 && lengthChar >= 8) {
    break;
  }
  alert("Password length must be 8 to 128 characters long!");
}
var chooseLc = confirm("Would you like lowercase characters?");
var chooseUc = confirm("Would you like UPPERCASE characters?");
var chooseNum = confirm("Would you like numbers?");
var chooseSymb = confirm("Would you like symbols?");

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(
    lengthChar,
    chooseLc,
    chooseUc,
    chooseNum,
    chooseSymb
  );
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
