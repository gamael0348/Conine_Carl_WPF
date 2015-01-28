// Does a string follow a 123-456-7890 pattern like a phone number?
var notAPhoneNumber = function(){
  alert("Not a phone number!")
};
var phoneNumber = function (){
  var myPrompt = prompt ("Please input a number to see if it is in valid phone number pattern", "Input a number.");
    var first = myPrompt.indexOf("-");
    if (myPrompt.length >= 13 || myPrompt.length < 13) {
        notAPhoneNumber()
    }
    else if (first === -1){
        notAPhoneNumber()
    }
    else if (first === 3){
        var second = myPrompt.lastIndexOf("-");
        if (second != 7){
            notAPhoneNumber()
        }
        else if (second === 7){
            var firstSet = myPrompt.substring(0, 3);
            var secondSet = myPrompt.substring(4, 7);
            var thirdSet = myPrompt.substring(8, 12);
            var wholeSet = firstSet + secondSet + thirdSet;
            parseInt(wholeSet);
            if (wholeSet <= 9999999999) {
                alert("You have a phone number which is " + wholeSet);
                alert("Here it is with the dashes " + myPrompt);
            }
            else {
                notAPhoneNumber()
            }
        }
    }

};
phoneNumber();

//Does a string follow an aaa@bbb.ccc pattern like an email address?


// Is the string a URL? (Does it start with http: or https:?)


// Title-case a string (split into words, then uppercase the first letter of each word)


//Given a string that is a list of things separated by a given string, as well as another string separator,
// return a string with the first separator changed to the second: "a,b,c" + "," + "/" → "a/b/c".


// Format a number to use a specific number of decimal places, as for money: 2.1 → 2.10


// Fuzzy-match a number: is the number above or below a number within a certain percent?


// Find the number of hours or days difference between two dates.


// Given a string version of a number such as "42",
// return the value as an actual Number, such as 42.


// Find the smallest value in an array that is greater than a given number


// Find the total value of just the numbers in an array, even if some of the
// items are not numbers.


// Given an array of objects and the name of a key, return the array sorted
// by the value of that key in each of the objects:
// "a" + [{a:2},{a:3},{a:1}] → [{a:1},{a:2},{a:3}].