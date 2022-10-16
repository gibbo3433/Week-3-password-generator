// This password generator will create the user a password depending on what criteria they want
var generateBtn = document.querySelector("#generate");

//Various arrays to choose from to add into the users password choice


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {

//var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
//var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
//var special = ["!", "£", "$", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];

//var Userchoicearray [];

var passwordLength = window.prompt ("How many characters would you like your password to be? Choose between 8 and 128");
  //Asking the user how many characters they want for their password
  if (isNaN (passwordLength))  {
    window.alert("this must be a number!");
    return;   
  }
   else if (passwordLength<8 || passwordLength>128) { 
    window.alert("this must be a valid number between 8 and 128!");
    
    return;
  }
   else {
    console.log(passwordLength);
    confirmlower = confirm("click OK to add lower case letters to your password");
    confirmupper = confirm("click OK to add upper case letters to your password");
    confirmknumber = confirm("click OK to add numbers to your password");
    confirmspecial = confirm("click OK to add special characters to your password");
  }

  if (!confirmlower && !confirmupper && !confirmknumber && !confirmspecial) {
    window.alert("you must choose at least one criteria!");
    return;
  }
  









   
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);