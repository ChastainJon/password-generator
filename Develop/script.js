// Assignment code here
var upperCaseChar = null;
var lowerCaseChar = null;
var numberChar = null;
var specialChar = null;
var upperCaseArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowerCaseArray = ['a', 'b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var numberArray = ['1','2','3','4','5','6','7','8','9','0'];
var specialArray = ['!', '"','#','$','%','&',"'",'(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[','\\',']','^','_','`','{','|','}','~'];
var passwordChars = [];
var passwordLength = 0;



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  
  passwordChars = [];
}

function generatePassword(){
  var password = '';
  var passwordChar = '';
  
  //Get user input
  getLength();
  upperCase();
  lowerCase();
  numbers();
  specials();
  
  //Determine which characters are to be added or not
  if(upperCaseChar === true){
    for(var i = 0; i <= upperCaseArray.length - 1; i++){
      passwordChars.push(upperCaseArray[i]);
    }
  }
  if(lowerCaseChar === true){
    for(var i = 0; i <= lowerCaseArray.length - 1; i++){
      passwordChars.push(lowerCaseArray[i]);
    }
  }
  if(numberChar === true){
    for(var i = 0; i <= numberArray.length - 1; i++){
      passwordChars.push(numberArray[i]);
    }
  }
  if(specialChar === true){
    for(var i = 0; i <= specialArray.length - 1; i++){
      passwordChars.push(specialArray[i]);
    }
  }
  if(upperCaseChar != true && lowerCaseChar != true && numberChar != true && specialChar != true){
    alert("Please select atleast one character type");
    generatePassword();
  }
  
  //Concatenate password string
  for(var i = 0; i <= passwordLength; i++){
    charNum = getRandomInt(passwordChars.length);
    password = password + passwordChars[charNum];
  }
  return password;
}

function getLength(){
  passwordLength = window.prompt("How many characters would you like your password to be? (8-128)");
  if(passwordLength >= 8 && passwordLength <= 128){
    alert("The password length will be " + passwordLength + " characters long");
  }
  else{
    alert("Please enter a number from 8 to 128");
    getLength();
  }
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
    numberChar = true;
  }
  else if(numbersCheck === 'n'){
    numberChar = false;
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

function getRandomInt(max){
  return Math.floor(Math.random() * max);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
