// This password generator will create the user a password depending on what criteria they want
var generateBtn = document.querySelector("#generate");

//Various arrays to choose from to add into the users password choice
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var special = ["!", "£", "$", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"]

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {
  window.prompt ("How many characterd would you like your password to be? Choose between 8 and 128) ")
  //Asking the user how many characters they want for their password
  if 
  


}