// If you are reading this then I hope you enjoyed my program!
/*
 This will be fun!
 Lets go to work!
 */

// Below are the variables I will be working with. I prefer to declare first and use later.
var minutesToWork;
var myConfirmation1;
var myConfirmation2;
var myConfirmation3;
var myConfirmation4;
var myConfirmation5;
var time = 30;
var onDuty;
minutesToWork = 60;

alert("Just kidding.");
alert ( " You wake up to the sound of your alarm!" );

myConfirmation1 = confirm("Wake up?");

if ( myConfirmation1 === true) {
    alert ( minutesToWork + " Minutes to get to work! " )
}
else {
    alert("You hit snooze...");
    alert(minutesToWork - 5 + " Minutes to get to work! ");
    alert("You wake up to your alarm and realize if you sleep anymore you could be late!");
    minutesToWork = minutesToWork - 5
}

myConfirmation2 = confirm(" Take a shower?");

if ( myConfirmation2 === true) {
    alert( " Oh so clean! ");
    alert( minutesToWork - 15 + " Minutes to get to work! ");
    minutesToWork = minutesToWork - 15
}
else {
    alert(" You\'re stinky!");
    alert( minutesToWork + "Minutes to get to work!")
}

myConfirmation3 = confirm( "Brush your teeth?");

if ( myConfirmation3 === true){
    alert(" The breath of a champion! ");
    alert( minutesToWork - 10 + " Minutes to get to work!" );
    minutesToWork = minutesToWork - 10
}
else {
    alert (" Your breath stinks! ");
    alert( minutesToWork + "Minutes to get to work!")
}
alert(" Time to get dressed! ");
alert(minutesToWork- 5 + " Minutes to get to work! ");
minutesToWork = minutesToWork - 5;
alert(" You\'re getting in your car and you realize you have a decision to make. ");
myConfirmation4 = confirm( " Do you take Atlantic? ");

if ( myConfirmation4 === true) {
    alert(" You ran into traffic.");
    alert(" You arrive at work and got to listen to your program more!");
    minutesToWork = minutesToWork - 20;
    alert(minutesToWork + " Minutes to get inside the building!")
}
else {
    alert( " You take Kernan to Wonderwood.");
    alert( " You arrive at work.");
    minutesToWork = minutesToWork - 12;
    alert( minutesToWork + " Minutes to get inside the building!")
}
myConfirmation5 = confirm ( "Do you go in or sit in the car listening to the radio?");
if ( myConfirmation4 === true ){
    alert( " You spend 5 minutes listening to the radio.");
    minutesToWork = minutesToWork - 5;
    alert( minutesToWork + " Minutes to get inside the building!")
}
alert(" You go inside and begin your day at work! ");
if ( minutesToWork >= 1){
    var myPrompt = prompt(" What is your name?"," Please enter your name.");
    alert( "Congratulations " + myPrompt + "! You made it on time!" )
}
else {
    myPrompt = prompt(" What is your name?"," Please enter your name.");
    alert( "You\'re late!");
    alert( "There is a counseling chit with " + myPrompt + "\'s name on it!")
}
// I wanted to use a random in this loop because you never know when people will show up to work but you know someone will eventually
for (var people = 0; people < 3; people = Math.floor((Math.random() * 6) )) {
    alert(" You performed a morning check!");
    time--
}
// Our Senior Chief always makes up do stuff that doesn't need to be done
// On the other hand if he doesn't give us stuff to do then we won't have anything to do
// Therefore when he is at work we do what he says, but if he isn't we sit and do nothing all day
var seniorChiefIsNotHere = Math.floor((Math.random() * 6) );
var lpoGetsCallFromSenior = 1;
while ( seniorChiefIsNotHere === 1 || lpoGetsCallFromSenior >= 5) {
    alert ("Do nothing all day every day!!!");
    seniorChiefIsNotHere = Math.floor((Math.random() * 6) );
    lpoGetsCallFromSenior++
}
alert ("Senior chief has arrived!!!");
// This little bit chooses a random item for you to perform
var myArray = [ "scrub toilets", "wash bulkheads", "wax floors", "do maintenance on equipment", "do GMTs"];
var rand = myArray[Math.floor(Math.random() * myArray.length)];
alert ( "Senior tells you to " + rand);
time = time - 20;
// This loop tells you to hurry up then asks if you completed the work and for every no answer repeats.
for (var myConfirmation6 = confirm( "Have you completed " + rand + "?"); myConfirmation6 === false; ){
    alert ( "Hurry up!");
    time--;
    myConfirmation6 = confirm( "Have you completed " + rand + "?")

}
if( myConfirmation6 === true && time <= 5 ){
    alert ( "Time to go home!")
}
else{
    alert ( "Go hang out on the smoke deck until it\'s time to go home");
    time = time - 5
}
if (time != 5){
    alert ("Go home!")
}
else {
    alert ("Wait five minutes and go home!")
}
/*
You didn't really think I was going to start all over did you?
I'm trying to build my day here and by the end of project 4
I will have included my work I do for full sail and
the time I spend with my family hopefully.
*/
alert("Time to go to work...again");
var clockIn = function(){
    var d = new Date ();
    var time = d.getHours ();
    var clockingIn = confirm("Would you like to clock in?");
    if (clockingIn === true && time === 17){
        alert(" " + myPrompt + "has clocked in and will now get paid!")
    }
    else if (clockingIn === true && time <= 17) {
        alert("You are a time traveler because you got off your first job just 30 minutes ago which is not enough time to get ready.");
        var manager = prompt("Please enter the managerial code","Hint: 123 x 2");
        if (manager === 123123) {
            alert("The manager allowed you to clock in early! How lucky you are!")
        }
    }
    else {
        alert("You are either late or super early. Either way you aren't going to work. You are actually dreaming.")
    }
};
var deliveries = ["Shawn", "Tim", "Tori", "Victoria", "Lesly"];
var callers = Math.floor((Math.random() * 6));
var tipTotal = 0;
var deliverPizza = function (manager) {
    for (var pizza = 0; pizza <= deliveries.length; pizza++) {
        alert("I drive to " + deliveries[pizza] + "\'s house and deliver the pizza. ");
        var tip = Math.floor((Math.random() * 6));
        callers--;
        if (tip === 0) {
            alert("I got stiffed!");
        }
        else {
            alert("I got " + tip + " dollars as a tip!");
            if (tip === 1) {
                tipTotal = tipTotal + tip;
            }
            else if (tip === 2) {
                tipTotal = tipTotal + tip;
            }
            else if (tip === 3) {
                tipTotal = tipTotal + tip;

            }
            else if (tip === 4) {
                tipTotal = tipTotal + tip;
            }
            else if (tip=== 5)  {
                tipTotal = tipTotal + tip;
            }
            else{
                tipTotal = tipTotal + tip;
                manager = prompt("Please input managerial code due to high tip amount.", "Hint: 321 x 2")
            }
        }
    }
    if (callers > 1) {
        deliveries.push ( "Jerry" );
        deliverPizza(manager);
        callers = 0
    }
    return tipTotal
};
clockIn();
deliverPizza();
Number ();
alert(myPrompt + " got " + tipTotal + " dollars in tips tonight!");
alert("Time to go home!");
