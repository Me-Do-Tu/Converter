var input = document.getElementById('input');
var result = document.getElementById('result');
var inputType = document.getElementById('inputType');
var resultType = document.getElementById('resultType');
var inputTypeValue,resultTypeValue;

// add listener
input.addEventListener("keyup",myresult);
inputType.addEventListener("change",myresult);
resultType.addEventListener("change",myresult);

// taking initial value
inputTypeValue = inputType.value;
resultTypeValue = resultType.value;

function myresult(){
    inputTypeValue = inputType.value;
    resultTypeValue = resultType.value;
//compare the input and resultType value and add formula
    if(inputTypeValue === "megabyte" && resultTypeValue === "gigabyte"){
        //meter to kilometer
        result.value = Number(input.value)/1000;
    }else if(inputTypeValue === "megabyte" && resultTypeValue === "terabyte"){
        //meter to centimeter
        result.value = Number(input.value)/10000;
    }else if(inputTypeValue === "megabyte" && resultTypeValue === "megabyte"){
        //meter to meter
        result.value = input.value
    }

    if(inputTypeValue === "gigabyte" && resultTypeValue === "megabyte"){
        //kilometer to centimeter 
        result.value = Number(input.value)*1000
    }else if(inputTypeValue === "gigabyte" && resultTypeValue === "terabyte"){
        //kilometer to centimeter
        result.value = Number(input.value)/1000;
    }else if(inputTypeValue === "gigabyte" && resultTypeValue === "gigabyte"){
        //kilometer to kilometer
        result.value = input.value
    }

    if(inputTypeValue === "terabyte" && resultTypeValue === "gigabyte"){
        //centimeter to kilometer
        result.value = Number(input.value)*1000;
    }else if(inputTypeValue === "terabyte" && resultTypeValue === "megabyte"){
        //centimeter to meter
        result.value = Number(input.value)*1000000;
    }else if(inputTypeValue === "terabyte" && resultTypeValue === "terabyte"){
        //centimeter to centimeter
        result.value = input.value
    }
}


