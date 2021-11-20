// Assignment code here
var upperCaseChar = null;
var lowerCaseChar = null;
var numbersChar = null;
var specialChar = null;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  
}

function generatePassword(){
  var passwordLength = window.prompt("How many characters would you like?")
  upperCase();
  console.log(upperCaseChar);
  lowerCase();
  console.log(lowerCaseChar);
  numbers();
  specials();  

  // number between 33 and 126
  // var asciiValue = Math.floor(Math.random() * (126 - 33 + 1) + 33);
  // console.log(asciiValue);
  
  // var convertedChar = String.fromCharCode(asciiValue);
  // console.log(convertedChar);
}

function upperCase(){
  upperCaseCheck = window.prompt("Would you like upper case characters. (y/n)")
  upperCaseCheck = upperCaseCheck.toLowerCase();
  if(upperCaseCheck === 'y'){
    upperCaseChar = true;
  }
  else if(upperCaseCheck === 'n'){
    upperCaseChar = false;
  }
  else{
    alert("Please enter a valid option!");
    upperCase();
  }
}
function lowerCase(){
  lowerCaseCheck = window.prompt("Would you like lowercase characters? (y/n)");
  lowerCaseCheck = lowerCaseCheck.toLowerCase();
  if(lowerCaseCheck === 'y'){
    lowerCaseChar = true;
  }
  else if(lowerCaseCheck === 'n'){
    lowerCaseChar = false;
  }
  else{
    alert("Please enter a valid option!");
    lowerCase();
  }
}
function numbers(){
  numbersCheck = window.prompt("Would you like numbers? (y/n)");
  numbersCheck = numbersCheck.toLowerCase();
  if(numbersCheck === 'y'){
    numbersChar = true;
  }
  else if(numbersCheck === 'n'){
    numbersChar = false;
  }
  else{
    alert("Please enter a valid option!");
    numbers();
  }
}
function specials(){
  specialsCheck = window.prompt("Would you like special characters? (y/n)");
  specialsCheck = specialsCheck.toLowerCase();
  if(specialsCheck === 'y'){
    specialChar = true;
  }
  else if(specialsCheck === 'n'){
    specialChar = false;
  }
  else{
    alert("Please enter a valid option!");
    specials();
  }
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
