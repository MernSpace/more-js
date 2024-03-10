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
    let parallelogramHeight = document.getElementById('parallelogram-height');
    let parallelogramHeightString = parallelogramHeight.innerText;
    let parallelogramHeightNumber = parseInt(parallelogramHeightString);
    console.log(parallelogramHeightNumber);
    console.log(typeof parallelogramHeightNumber)


    let parallelogramBase = document.getElementById('parallelogram-base');
    let parallelogramBaseString = parallelogramBase.innerText;
    let parallelogramBaseNumber = parseInt(parallelogramBaseString);

    let ParallelogramArea = parallelogramHeightNumber * parallelogramBaseNumber;
    let displayParallelogram = document.getElementById('display-Parallelogram');
    displayParallelogram.innerText = ParallelogramArea;
})