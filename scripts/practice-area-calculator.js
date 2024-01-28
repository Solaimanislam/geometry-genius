// console.log('Practice file added');
// reusable function for triangle............
function calculatorTriangleArea(){
    const base = getInputValueById('triangle-base');
    const height = getInputValueById('triangle-height');
    // validation input: base and height...
    if(isNaN(base) || isNaN(height)){
        alert('Please insert a number');
        return;
    }
    const area = .5 * base * height;
    setElementInnerText('triangle-area', area);
    addToCalculationEntry('Triangle', area);

}
// reusable function for rectangle...........
function calculateRectangleArea(){
    const length = getInputValueById('rectangle-length');
    const width = getInputValueById('rectangle-width');
    // validate
    if(isNaN(length) || isNaN(height))
    {
        alert('Please insert a number');
        return;
    }
    const area = length * width;
    setElementInnerText('rectangle-area', area);
    addToCalculationEntry('Rectangle', area);
}
// reusable function for Parallelogram...........
function calculateParallelogramArea(){
    const base = getInputValueById('parallelogram-base');
    const height = getInputValueById('parallelogram-height');
    // validation input: base and height...
    if(isNaN(base) || isNaN(height)){
        alert('Please insert a number');
        return;
    }
    const area = base * height;
    setElementInnerText('parallelogram-area',area);

    // add to calculation entry...
    addToCalculationEntry('parallelogram', area);
}
// reusable function for Rhombus............
function calculateRhombusArea(){
    const d1 = getInputValueById('rhombus-d1');
    const d2 = getInputValueById('rhombus-d2');
     // validate
     if(isNaN(d1) || isNaN(d2))
     {
         alert('Please insert a number');
         return;
     }
    const area = .5 * d1 * d2;
    setElementInnerText('rhombus-area', area);
    addToCalculationEntry('Rhombus', area);
}
// reusable function for Ellipse............
function calculateEllipseArea(){
    const firstRadius = getInputValueById('ellipse-first-radius');
    const secondRadius = getInputValueById('ellipse-second-radius');
     // validate
     if(isNaN(firstRadius) || isNaN(secondRadius))
     {
         alert('Please insert a number');
         return;
     }

    const area = 3.14 * firstRadius * secondRadius;
    const areaTwoDecimal = area.toFixed(2);
    setElementInnerText('ellipse-area',areaTwoDecimal);

    addToCalculationEntry('Ellipse', areaTwoDecimal);
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

// add to calculation entry>>>>>>>>>>
/*
1. get the element where you want to add the dynamic HTML
2. create an element you want to add..
3. if needed add some class
4. set inner HTML. it could be dynamic Template string
5. append the created element as a child of the parent
*/

function addToCalculationEntry(areaType, area){
    console.log(areaType+ ' ' + area);
    const calculationEntry = document.getElementById('calculation-entry');

    const count = calculationEntry.childElementCount;

    const p = document.createElement('p');
    p.classList.add('my-4');
    p.innerHTML = `${count + 1}. ${areaType} ${area} cm<sup>2<sup><button class="btn btn-sm btn-success  ml-4">Convert</button>`;
    calculationEntry.appendChild(p);


}

// Data Validation 
/* 
1. Set the proper type of the input field.( number, data, email)
2. check type using typeof
3. NaN means: Not a Number. is NaN is checking whether the input is not a number or not

*/