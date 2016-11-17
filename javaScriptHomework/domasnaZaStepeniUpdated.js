/*var option = prompt("Insert F or C"); // option = "F";
if (option == "F" || option == "f"){
    var F = parseInt(prompt("Insert Fahrenheit")); 
    var FnalC = ((5/9)*(F-32)).toFixed(0);// za da zaokruzi
    var FnalCR = Math.round((5/9)*(F-32)); //za da zaokruzi 
    alert("Toa e "+FnalCR+ " stepeni"); 
}
else if (option == "C" || option == "c"){
    var FinalF = parseInt(prompt("Insert Celsius"))*1.8+32;
    alert("Toa e "+ FinalF+" stepeni"); 
    
}
else {
    alert("Wrong input"); 
}*/
//zadacata gore e napisana za vreme na vezbi so grupa!



var option = prompt("Insert F or C");

function matematikaZaCelziusovi(celsius){
    var celsiusToFahrenheit = Math.round(celsius*1.8+32);
    outcome = (celsius+" Celsiusovi stepeni se "+celsiusToFahrenheit+ " Farenhajtovi stepeni.");
    return outcome;
}

function matematikaZaFarenhajtovi(fahrenheit){
    var fahrenheitToCelsius = Math.round((5/9)*(fahrenheit-32));
    outcome = (fahrenheit+" Fahrenhajtovi stepeni se "+fahrenheitToCelsius+" Celziusovi stepeni.");
    return outcome;
}

if (option =="C" || option =="c"){
    var x = parseInt(prompt("Enter Celsius"));
    alert(matematikaZaCelziusovi(x));
}




else if (option =="F" || option =="f"){ 
    var y = parseInt(prompt("Enter Fahrenheit"));
    alert(matematikaZaFarenhajtovi(y));
}
 




