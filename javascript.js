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
    if(inputTypeValue === "meter" && resultTypeValue === "kilometer"){
        //meter to kilometer
        result.value = Number(input.value)*0.001;
    }else if(inputTypeValue === "meter" && resultTypeValue === "centimeter"){
        //meter to centimeter
        result.value = Number(input.value)*100;
    }else if(inputTypeValue === "meter" && resultTypeValue === "meter"){
        //meter to meter
        result.value = input.value
    }

    if(inputTypeValue === "kilometer" && resultTypeValue === "meter"){
        //kilometer to centimeter 
        result.value = Number(input.value)*1000
    }else if(inputTypeValue === "kilometer" && resultTypeValue === "centimeter"){
        //kilometer to centimeter
        result.value = Number(input.value)*10000;
    }else if(inputTypeValue === "kilometer" && resultTypeValue === "centimeter"){
        //kilometer to kilometer
        result.value = input.value
    }

    if(inputTypeValue === "centimeter" && resultTypeValue === "kilometer"){
        //centimeter to kilometer
        result.value = Number(input.value)*0.00001;
    }else if(inputTypeValue === "centimeter" && resultTypeValue === "meter"){
        //centimeter to meter
        result.value = Number(input.value)*0.01;
    }else if(inputTypeValue === "centimeter" && resultTypeValue === "centimeter"){
        //centimeter to centimeter
        result.value = input.value
    }
}


