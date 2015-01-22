var deliveries = [ "John", "Steve", "Jessica", "Cora", "Madeline"];
var deliverPizza = function (){
    for (var pizza = 0; pizza <= deliveries.length; pizza++){
        alert("You drive to " + deliveries[pizza] + "\'s house. ")
    }

};
deliverPizza();