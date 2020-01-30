// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  // var password = function() 
      var password;
  var pwdLength = prompt("What should be the length of your password? Min 8 characters and max 128");
    var pwdInt = Number(pwdLength);
 if ( isNaN(pwdInt) ) {
      alert("choose a number. Can't leave it empty.");
      writePassword();
    }
    else if(pwdInt > 128 || pwdInt < 8)
    {
     alert("The password should between 8 to 128 characters")
     writePassword();
    }
    else {
    alert(`your password length is ${pwdInt} `)
   
    }
  
    var numstring = "0123456789" ;
    var specials = '!@#$%^&*()_+';
    var charstring = "abcdefghijklmnopqrstuvwxyz";
    var capstring = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var pwdString = "";

    var numConf = confirm("do you want to include numeral in the password?");
    if(numConf){
      pwdString = pwdString + numstring;
    }
    var charConf = confirm("do you want to include small alphabets in the password?");
    if(charConf){
      pwdString = pwdString + charstring;
    }
    var specConf = confirm("do you want to include special characters in the password?");
    if(specConf){
      pwdString = pwdString + specials;
    }
    var capConf = confirm("do you want to include capital alphabets in the password?");
    if(capConf){
      pwdString = pwdString + capstring;
    }
    console.log(pwdString);
    var newPassword = '';
    for ( i = 0; i < pwdInt; i++){
      newcharacter = pwdString[Math.floor(Math.random()*pwdString.length)];

      newPassword = newPassword + newcharacter;

    }
  
   //loop through the pwdstring as many times as the length of the pass chosen,
    // for every iteration you will pick 1 random character
    //add every character to a string
    password = newPassword;
    passwordText.value = password;

}



 
