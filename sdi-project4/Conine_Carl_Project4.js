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
/*
 This problem involves sending a string into the function, changing the first letter
 of each word to uppercase while making sure the rest of the word is lowercase,
 and then returning the string from the function so it can be output.
 */
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

/*
 This function will require two parameters. The first is the number you wish to
 change, and the second is the number of decimal places you wish to use to
 format the number. For example, to format pi to three decimal places, you might
 send the following argument parameters: (3.14159, 3). The function will then
 return 3.142.
 */
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
/*
 As you have learned, there is a difference between a number as a string data
 type and a number as a Number data type. For this task, you will simply need to
 send a string into the function and return it as a Number. If you want to get
 creative, you also can add a conditional to determine if the string sent into the
 function is a number before you do the conversion.
 */
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
/*
 This one can be tricky if your array includes a string that is a number. You will
 send an array into the function and have it add together the numbers in the array.
 For example, if you send the array [1, “pickles”, 3, “onions”, 5, “10”, 6, “SDI”], the
 function should return 15. Therefore, it should be able to recognize “10” as a
 string and ignore it from the total.
 */
var addTheArray = function(){

};
addTheArray();
