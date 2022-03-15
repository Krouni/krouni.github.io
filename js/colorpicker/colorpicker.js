
var input = document.querySelectorAll("input");

for(var i = 0; i < input.length;i++) {
    input[i].addEventListener("input", function() {
    var slider1 = document.getElementById("slider1").value,
        slider2 = document.getElementById("slider2").value,
        slider3 = document.getElementById("slider3").value;

    var display = document.getElementById("swatch");
    display.style.background = "rgb(" + slider1 + ", " + slider2 + ", " + slider3 + ")";
    })
}
