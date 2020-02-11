const changeGreeting = function() {
    var date = new Date();
    var hour = date.getHours();
    var greetingChanged = '';
    if (hour >= 6 && hour < 12) {
        greetingChanged = '¡Buenos días!';
    } else if (hour >= 12 && hour < 18) {
        greetingChanged = '¡Buenas tardes!'
    } else {
        greetingChanged = '¡Buenas noches!'
    }
    document.getElementById("greeting").innerHTML = greetingChanged;
}

changeGreeting();