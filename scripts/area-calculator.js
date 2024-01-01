function calculatorTriangleArea(){
    // console.log('button clicked');
    // get triangle base value.........
    const baseField = document.getElementById('triangle-base');
    const baseValueText = baseField.value;
    const base = parseFloat(baseValueText);
    // console.log(base);

    // get triangle height value.....
    const heightField = document.getElementById('triangle-height');
    const heightValueText = heightField.value;
    const height = parseFloat(heightValueText);
    // console.log(height); 

    const area = .5 * base * height;
    // console.log(area);

    // show triangle area

    const areaSpan = document.getElementById('triangle-area');
    areaSpan.innerText = area;
}

function calculateRectangleArea(){

    const lengthField = document.getElementById('rectangle-length');
    const lengthValueText = lengthField.value;
    const length = parseFloat(lengthValueText);
    // console.log(length);

    const widthField = document.getElementById('rectangle-width');
    const widthValueText = widthField.value;
    const width = parseFloat(widthValueText);
    // console.log(width);

    const rectangleArea = length * width;
    // console.log(rectangleArea);

    const finalRectangleArea = document.getElementById('rectangle-area');
    finalRectangleArea.innerText = rectangleArea;
}

// reusable function --> reduce duplicate code

function calculateParallelogramArea(){
    const base = getInputValue('parallelogram-base');
    console.log(base);

    const height = getInputValue('parallelogram-height');
    console.log(height);

    const area = base * height;
}

// reusable get input value field in number..
function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}