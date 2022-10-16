// This password generator will create the user a password depending on what criteria they want
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
  function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {

 //Various arrays to choose from to add into the users password choice

 // Will determine the password length
  var Passlength

  // different lower case items that the generater will choose from
  var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  console.log(" These are the choices for lower " + lower);

  // different upper case items that the generater will choose from
  var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  console.log(" These are the choices for upper " + upper);

  // different number items that the generater will choose from
  var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  console.log(" These are the choices for number " + number);

  // different special items that the generater will choose from
  var special = ["!", "£", "$", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
  console.log(" These are the choices for special " + special);

  // This will array will be full of optional choices the user will want to include into their password
  var Userchoicearray = [];

  //Asking the user how many characters they want for their password
  var Passlength = window.prompt ("How many characters would you like your password to be? Choose between 8 and 128");
   
  if (isNaN (Passlength))  {
    window.alert("this must be a number!");
    // if not a number, function will return to the beginning
    return;   
  }
   else if (Passlength<8 || Passlength>128) { 
    window.alert("this must be a valid number between 8 and 128!");
    // if not between 8 and 128, function will return to the beginning
    return;
  }
   else {
    // Shows the password length user wanted to have as a number
    console.log( " Your password will have " + Passlength + " characters ");

    // Checks criteria in which the password will include
    var confirmlower = confirm("click OK to add lower case letters to your password");
    var confirmupper = confirm("click OK to add upper case letters to your password");
    var confirmnumber = confirm("click OK to add numbers to your password");
    var confirmspecial = confirm("click OK to add special characters to your password");
  }

  if (!confirmlower && !confirmupper && !confirmnumber && !confirmspecial) {
    window.alert("you must choose at least one criteria!");
    //if not chosen at least one from the list criteria, function will return to the beginning
    return;
  }

  // If the user wants lower case items in their password, this will add then into the Userchoicearray
  if (confirmlower) {
    Userchoicearray = Userchoicearray.concat(lower);
  }

  // If the user wants upper case items in their password, this will add then into the Userchoicearray
  if (confirmupper) {
    Userchoicearray = Userchoicearray.concat(upper);
  }

  // If the user wants numbers in their password, this will add then into the Userchoicearray
  if (confirmnumber) {
    Userchoicearray = Userchoicearray.concat(number);
  }

  // If the user wants special items in their password, this will add then into the Userchoicearray
  if (confirmspecial) {
    Userchoicearray = Userchoicearray.concat(special);
  }
  // shows the user which characters their password may contain
  console.log(" This is a list of the characters which your password may contain " + Userchoicearray);

  // This will creat
  var passwordcreate = []
  for (var i=0; i < Passlength; i++) {
   var randomIndex = Math.floor(Math.random() * Userchoicearray.length);
   passwordcreate.push(Userchoicearray[randomIndex]);
  }
  console.log(" Your password is " + passwordcreate)
  console.log(" Don't forget to remember it! ")
  return(passwordcreate.join(""));

  }
  
  // Add event listener to generate button
generateBtn.addEventListener("click", writePassword)