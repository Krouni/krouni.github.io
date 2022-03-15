const setup = () => {

    let sliders = document.getElementsByClassName("slider");

    for (let i = 0; i < sliders.length; i++) {
        sliders[i].addEventListener("change", changeColor);
        sliders[i].addEventListener("input", changeColor);
    }

}

const changeColor = () => {

    let sliders = document.getElementsByClassName("slider");

    let redLabel = document.getElementById("redLabel");
    let blueLabel = document.getElementById("blueLabel");
    let greenLabel = document.getElementById("greenLabel");

    let colorDiv = document.getElementById("color");
    let hexTxt = document.getElementById("hexColor");

    let red = sliders[0].value;
    let green = sliders[1].value;
    let blue = sliders[2].value;

    redLabel.textContent = `Red: ${red}`;
    greenLabel.textContent = `Green: ${green}`;
    blueLabel.textContent = `Blue: ${blue}`;


    let display = document.getElementById("swatch");
    display.style.background = "rgb(" + red + ", " + green + ", " + blue + ")";
}

const decToHex = decimal => {
    decimal = parseInt(decimal).toString(16)
    return decimal.length === 1 ? "0" + decimal : decimal;
}




window.addEventListener("load", setup);