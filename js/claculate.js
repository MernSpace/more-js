console.log("connected");

//  triangle btn click function

document.getElementById('triangle-btn').addEventListener('click',function(){
    const baseInput = document.getElementById('base-input')
    const baseInputValue = baseInput.value;
    const baseInputValueNumber = parseFloat(baseInputValue);
    console.log(baseInputValueNumber)

    const heightInput = document.getElementById('height-input')
    const heightInputValue = heightInput.value;
    const heightInputValueNumber = parseInt(heightInputValue);
    console.log(heightInputValueNumber)

    let area =( 0.5 * baseInputValueNumber * heightInputValueNumber);
    let displayArea = document.getElementById('display-area');
    displayArea.innerText = area;
    baseInput.value = ''
    heightInput.value = ''

})


//  rectangle btn click function


function onRectangleBtnClick(){
    const rectangleWidthInput = document.getElementById('rectangle-w-input');
    const rectangleWidthInputValue = rectangleWidthInput.value;
    const rectangleWidthInputValueNumber = parseFloat(rectangleWidthInputValue);

    const rectangleIInput = document.getElementById('rectangle-i-input');
    const rectangleIInputValue = rectangleIInput.value;
    const rectangleIInputValueNumber = parseFloat(rectangleIInputValue);
     
    
    let rectangleArea = rectangleWidthInputValueNumber * rectangleIInputValueNumber;
    let displayArea = document.getElementById('display-rectangle');
    displayArea.innerText = rectangleArea
}





//  parallelogram btn click function


document.getElementById('parallelogram-btn').addEventListener('click',function(){
        let parallelogramBase = getInputValue('parallelogram-b-input');
        let parallelogramHeight = getInputValue('parallelogram-h-input');

        let area = parallelogramBase * parallelogramHeight;
        setInnerText('display-Parallelogram',area)
})


// Rhombus btn click function

function onRhombusBtnClick(){
    let d1 = getInputValue('rhombus-d1')
    let d2 = getInputValue('rhombus-d2')

    let area = 0.5 * d1 * d2
    setInnerText('display-rhombus',area)
}


// pentagon btn click function

function onPentagonBtnClick(){
    const b = getInputValue('pentagon-b');
    const p = getInputValue('pentagon-p');
    let area = 0.5 * b * p
     setInnerText('display-pentagon',area);
}

// ellipse btn click function
 
function onEllipseBtnClick(){
    const a = getInputValue('ellipse-a');
    const b = getInputValue('ellipse-b');

    const area = 3.14 * a * b;
    setInnerText('display-ellipse',area)
}








//reuseable function 

function getInputValue(inputID){
    let inputField = document.getElementById(inputID);
    let inputValue = inputField.value;
    let inputNumber = parseFloat(inputValue);
    return inputNumber
}

function setInnerText (displayID,Area){
    let innerTextField = document.getElementById(displayID);
    innerTextField.innerText = Area;
}