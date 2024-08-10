var css = document.getElementById("CSS");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("body");
var button = document.querySelector(".button");

// ---- Getting hold of the CSS body background property and storing into a variable to be stored in the empty h3 tag when the page loads
var bodyBackground = window.getComputedStyle(body).getPropertyValue("background");
var gradientMatch = bodyBackground.match(/(linear-gradient\(.*?\))/);
css.textContent = gradientMatch[0];

// ---- Setting the background gradient feature for the input colors and addinf event listners
function inputValues(col1, col2) {
    body.style.background = `linear-gradient(to right, ${col1}, ${col2})`;
}

function setGradient() {
    inputValues(color1.value, color2.value);
    css.textContent = `${body.style.background};`;
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

//  ---- Setting the button for random RGB value to be fed to the input

function getRandomColor(){
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);

    //Convert decimal values to hexadecimal format
    var redHex = red.toString(16).padStart(2, '0');
    var greenHex = green.toString(16).padStart(2, '0');
    var blueHex = blue.toString(16).padStart(2, '0');

    var colorCode = '#' + redHex + greenHex + blueHex;
    return colorCode;
}

function setGradientClick() {
    clickColor1 = getRandomColor();
    clickColor2 = getRandomColor();
    inputValues(clickColor1, clickColor2);
    css.textContent = `${body.style.background};`;
}

button.addEventListener("click", setGradientClick);
// Nice