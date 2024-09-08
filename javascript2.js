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
    if(inputTypeValue === "hour" && resultTypeValue === "minute"){
        //meter to kilometer
        result.value = Number(input.value)*60;
    }else if(inputTypeValue === "hour" && resultTypeValue === "second"){
        //meter to centimeter
        result.value = Number(input.value)*3600;
    }else if(inputTypeValue === "hour" && resultTypeValue === "hour"){
        //meter to meter
        result.value = input.value
    }

    if(inputTypeValue === "minute" && resultTypeValue === "hour"){
        //kilometer to centimeter 
        result.value = Number(input.value)/60
    }else if(inputTypeValue === "minute" && resultTypeValue === "second"){
        //kilometer to centimeter
        result.value = Number(input.value)*60;
    }else if(inputTypeValue === "minute" && resultTypeValue === "minute"){
        //kilometer to kilometer
        result.value = input.value
    }

    if(inputTypeValue === "second" && resultTypeValue === "hour"){
        //centimeter to kilometer
        result.value = Number(input.value)/3600;
    }else if(inputTypeValue === "second" && resultTypeValue === "minute"){
        //centimeter to meter
        result.value = Number(input.value)/60;
    }else if(inputTypeValue === "second" && resultTypeValue === "second"){
        //centimeter to centimeter
        result.value = input.value
    }
}


