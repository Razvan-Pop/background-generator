let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");
let randomButton = document.querySelector("button");

body.style.background = "linear-gradient(to right ," + color1.value + ", " + color2.value + ")";
css.textContent = body.style.background + ";";

function setGradient(firstColor, secondColor){
	body.style.background = "linear-gradient(to right, " + firstColor + ", " + secondColor + ")";
	css.textContent = body.style.background + ";";
}

function generateRandomColor(){
	let maxValue = 0xFFFFFF;
	let randomNumber = Math.random() * maxValue;
	randomNumber = Math.floor(randomNumber);
	randomNumber = randomNumber.toString(16);
	let randomColor = randomNumber.padStart(6, 0);
	return `#${randomColor.toUpperCase()}`
}

function generateRandomGradient(){
	// Generate random colors
	let firstColor = generateRandomColor();
	let secondColor = generateRandomColor();

	// Update color inputs
	color1.value = firstColor;
	color2.value = secondColor;

	// Set gradient
	setGradient(firstColor, secondColor);
}

// Add events
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
randomButton.addEventListener("click", generateRandomGradient);