// Does a string follow a 123-456-7890 pattern like a phone number?

// simple true or false for use in all functions.
var nope = function(){
  alert(false)
};
var yup = function(){
  alert(true)
};
var phoneNumber = function (){
  var myPrompt = prompt ("Please input a number to see if it is in valid phone number pattern", "Input a number.");
    var first = myPrompt.indexOf("-");
    if (myPrompt.length >= 13 || myPrompt.length < 12) {
        nope();
        return false
    }
    else if (first === -1){
        nope();
        return false
    }
    else if (first === 3){
        var second = myPrompt.lastIndexOf("-");
        if (second != 7){
            nope();
            return false
        }
        else if (second === 7){
            var firstSet = myPrompt.substring(0, 3);
            var secondSet = myPrompt.substring(4, 7);
            var thirdSet = myPrompt.substring(8, 12);
            var wholeSet = firstSet + secondSet + thirdSet;
            parseInt(wholeSet);
            if (wholeSet <= 9999999999) {
                yup();
                return true

            }
            else {
                nope();
                return false
            }
        }
    }

};
//phoneNumber();

// Is the string a URL? (Does it start with http: or https:?)
var url = function(){
  var myPrompt = prompt("Please enter a URL.");
    if (myPrompt.search("http:") === 0){
        yup();
        return true
    }
    else if (myPrompt.search("https:") === 0){
        yup();
        return false
    }
    else {
        nope();
        return false
    }
};
// url();

// Title-case a string (split into words, then uppercase the first letter of each word)
var titleCasing = function(){
    var string1 = prompt("Please input text.");
    var array1 = string1.split(" ");
    for (var i = 0; i < array1.length; i++){
        array1[i] = array1[i].charAt(0).toUpperCase() + array1[i].substr(1);
    }
    var string2 = array1.join(" ");
    alert(string2);
    return string2
};
// titleCasing();

// Format a number to use a specific number of decimal places, as for money: 2.1 → 2.10
var roundingUp = function(myPrompt, myPrompt1){
  //var myPrompt = prompt("Please input the number you wish to round.");
    //var myPrompt1 = prompt("Please input the number of decimal places you want to round to.");
    parseFloat(myPrompt);
    if (isNaN(myPrompt) === true){
        nope();
        return false
    }
    parseInt(myPrompt1);
    if (isNaN(myPrompt1) === true){
        nope();
        return false
    }
    var roundedNumber = Math.round(myPrompt*(Math.pow(10, myPrompt1)))/(Math.pow(10, myPrompt1));
    alert(roundedNumber);
    return roundedNumber
};
/*var myPrompt = prompt("Please input the number you wish to round.");
var myPrompt1 = prompt("Please input the number of decimal places you want to round to.");
roundingUp(myPrompt, myPrompt1);
*/

// Given a string version of a number such as "42",
// return the value as an actual Number, such as 42.
var notANumber = function(){
    var myPrompt = prompt("Please input a number.");
    parseInt(myPrompt);
    if (isNaN(myPrompt) === true){
        nope();
        return false
    }
        else if (isNaN(myPrompt)=== false){
            alert(myPrompt);
        return myPrompt

        }


};
// notANumber();


// Find the total value of just the numbers in an array, even if some of the
// items are not numbers.
var addTheArray = function(){
    var string1 = prompt("Input items you want to be in the array separated by a comma ");
    var anArray = string1.split(",");
    var theFinalNumber = 0;
    for(var i = 0; i < anArray.length; i++){
        anArray[i] = parseInt(anArray[i]);
        if(isNaN(anArray[i]) === true){
            anArray[i] = 0;
            theFinalNumber = theFinalNumber + anArray[i]
        }
        else{
            theFinalNumber = theFinalNumber + anArray[i]
        }
    }
alert(theFinalNumber);
    return theFinalNumber
};
//addTheArray();

/*
I used prompts so you can input information easily to test functionality
 of each function. On round up I passed in variables created outside the function
 to show I can. They still require input by you but I know how to set the variable to be a return from another function.
 Instructions seemed vague so I hope this is what they were asking for.
 I'm sure you know to test the functions all you have to do is remove the comments on them.
 */