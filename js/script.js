var inputRRedElement = document.querySelector('#inputRRed');
var inputRGreenElement = document.querySelector('#inputRGreen');
var inputRBlueElement = document.querySelector('#inputRBlue');

window.addEventListener('load', start);

function start(){

    inputRRedElement.addEventListener('input',getRGB)
    inputRGreenElement.addEventListener('input',getRGB)
    inputRBlueElement.addEventListener('input',getRGB)

    getRGB();

}

function getRGB(){
    var r = inputRRedElement.value;
    var g = inputRGreenElement.value;
    var b = inputRBlueElement.value;

    changeColor(r, g, b);
}

function changeColor (r,g,b){
    var canvasElement = document.querySelector('.canvas');
    var inputRedElement = document.querySelector('#inputRed');
    var inputGreenElement = document.querySelector('#inputGreen');
    var inputBlueElement = document.querySelector('#inputBlue');

    canvasElement.style.backgroundColor = `rgb(${r},${g},${b})`;

    inputRedElement.value = r;
    inputGreenElement.value = g;
    inputBlueElement.value = b;
}
