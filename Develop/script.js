// Assignment code here
function generatePassword() {
  var lc = "abcdefghijklmnopqrstuvwxyz";
  var uc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var num = "0123456789";
  var symb = "{}()#[],!_@/:;.|`$=+-*^?&~%'";

  while (true) {
    var lengthChar = prompt("How many charcters would you like? (8-128)");
    if (lengthChar <= 128 && lengthChar >= 8) {
      break;
    }
    alert("Password length must be 8 to 128 characters long!");
  }

  function lowerCharFunc() {
    var lowerChar = confirm("Do you want lowercase characters?");
    if (lowerChar === true) {
      lowerChar = "";
      lowerChar += lc[Math.floor(Math.random() * lc.length)];
      return lowerChar;
    } else {
      return false;
    }
  }

  function specialCharFunc() {
    var specialChar = confirm("Do you want uppercase characters?");
    if (specialChar === true) {
      specialChar = "";
      specialChar += symb[Math.floor(Math.random() * symb.length)];
      return specialChar;
    } else {
      return false;
    }
  }

  function numberCharFunc() {
    var numberChar = confirm("Do you want numbers?");
    if (numberChar === true) {
      numberChar = "";
      numberChar += num[Math.floor(Math.random() * num.length)];
      return numberChar;
    } else {
      return false;
    }
  }

  function upperCharFunc() {
    var upperChar = confirm("Do you want uppercase characters?");
    if (upperChar === true) {
      upperChar = "";
      upperChar += uc[Math.floor(Math.random() * uc.length)];
      return upperChar;
    } else {
      return false;
    }
  }

  var password =
    lowerCharFunc() + upperCharFunc() + numberCharFunc() + specialCharFunc();

  return (
    // lengthChar +
    password
  );
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
