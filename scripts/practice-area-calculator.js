// console.log('Practice file added');
// reusable function for triangle............
function calculatorTriangleArea(){
    const base = getInputValueById('triangle-base');
    const height = getInputValueById('triangle-height');
    const area = .5 * base * height;
    setElementInnerText('triangle-area', area);

}
// reusable function for rectangle...........
function calculateRectangleArea(){
    const length = getInputValueById('rectangle-length');
    const width = getInputValueById('rectangle-width');
    const area = length * width;
    setElementInnerText('rectangle-area', area);
}
// reusable function for Parallelogram...........
function calculateParallelogramArea(){
    const base = getInputValueById('parallelogram-base');
    const height = getInputValueById('parallelogram-height');
    const area = base * height;
    setElementInnerText('parallelogram-area',area);
}
// reusable function for Rhombus............
function calculateRhombusArea(){
    const d1 = getInputValueById('rhombus-d1');
    const d2 = getInputValueById('rhombus-d2');
    const area = .5 * d1 * d2;
    setElementInnerText('rhombus-area', area);
}
// reusable function for Ellipse............
function calculateEllipseArea(){
    const firstRadius = getInputValueById('ellipse-first-radius');
    const secondRadius = getInputValueById('ellipse-second-radius');
    const area = 3.14 * firstRadius * secondRadius;
    const areaTwoDecimal = area.toFixed(2);
    setElementInnerText('ellipse-area',areaTwoDecimal);
}

function getInputValueById(inputId){
    const elementField = document.getElementById(inputId);
    const elementValue = elementField.value;
    const element = parseFloat(elementValue);
    return element;
}

function setElementInnerText(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}