alert("Time to go to work");
var yourName = prompt("Input your name.");
var clockIn = function(){
    var d = new Date ();
    var time = d.getHours ();
    var clockingIn = confirm("Would you like to clock in?");
    if (clockingIn === true && time === 17){
        alert(" " + yourName + "has clocked in and will now get paid!")
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
    return yourName
};
var deliveries = [prompt("Please input a name.")];
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
    if (callers > 1){
        deliveries.push (prompt("Please enter a name."));
        deliverPizza(manager)
    }
    return tipTotal

};
clockIn();
deliverPizza();
Number ();
alert(yourName + " got " + tipTotal + " dollars in tips tonight!");
alert("Time to go home!");
