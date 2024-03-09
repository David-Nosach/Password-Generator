// Assignment code here
function generatePassword() {
  var lc = "abcdefghijklmnopqrstuvwxyz";
  var uc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var num = "0123456789";
  var symb = "{}()#[],!_@/:;.|`$=+-*^?&~%'";
  var totChars = lc + uc + num + symb;

  while (true) {
    var lengthChar = prompt("How many charcters would you like? (8-128)");
    if (lengthChar <= 128 && lengthChar >= 8) {
      break;
    }
    alert("Password length must be 8 to 128 characters long!");
  }

  var promptCount = 0;

  var lowerCharFunc = function () {
    var lowerChar = confirm("Do you want lowercase characters?");
    if (lowerChar === true) {
      lowerChar = "";
      lowerChar += lc[Math.floor(Math.random() * lc.length)];
      promptCount++;
      return lowerChar;
    } else {
      return;
    }
  };

  var specialCharFunc = function () {
    var specialChar = confirm("Do you want symbols?");
    if (specialChar === true) {
      specialChar = "";
      specialChar += symb[Math.floor(Math.random() * symb.length)];
      promptCount++;
      return specialChar;
    } else {
      return;
    }
  };

  var numberCharFunc = function () {
    var numberChar = confirm("Do you want numbers?");
    if (numberChar === true) {
      numberChar = "";
      numberChar += num[Math.floor(Math.random() * num.length)];
      promptCount++;
      return numberChar;
    } else {
      return;
    }
  };

  var upperCharFunc = function () {
    var upperChar = confirm("Do you want uppercase characters?");
    if (upperChar === true) {
      upperChar = "";
      upperChar += uc[Math.floor(Math.random() * uc.length)];
      promptCount++;
      return upperChar;
    } else {
      return;
    }
  };

  function result() {
    var password =
      lowerCharFunc() + upperCharFunc() + numberCharFunc() + specialCharFunc();

    // for loop - if contains 'false' then delete it then check while

    // let fruits = ["mango", "banana", "strawberry", "raspberry"];
    // let words = [
    //   "mango",
    //   "desk",
    //   "phone",
    //   "banana",
    //   "airpods",
    //   6,
    //   "mouse",
    //   "strawberry",
    //   9,
    //   "raspberry",
    //   10,
    // ];

    // words.forEach((word, index) => {
    //   if (fruits.indexOf(word) !== -1) {
    //     words[index] = "Fruit";
    //   }
    // });

    while (lengthChar > password.length) {
      password += totChars[Math.floor(Math.random() * totChars.length)];
    }

    if (promptCount === 0) {
      alert("you must choose 1 character type");
      return "generate new password with at least 1 character type";
    }

    return password;
  }
  console.log(specialChar);
  return result();
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
