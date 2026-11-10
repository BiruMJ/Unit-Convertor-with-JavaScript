/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let headerElement = document.querySelector("header");
let errorDisplay = document.getElementById("error-message");
let inputUnit = document.getElementById("input-unit");
let covertBtn = document.getElementById("convert-btn");

// Conversion Types
let convertLength = document.getElementById("convert-length");
let convertVolume = document.getElementById("convert-volume");
let convertMass = document.getElementById("convert-mass");

let myArray = [
    {   name: "length", 
        formula: 3.281, 
        unit1: "meters", 
        unit2: "feet", 
        conversionType: convertLength
    },
    {   name: "volume", 
        formula: 0.264, 
        unit1: "litres", 
        unit2: "gallons", 
        conversionType: convertVolume
    },
    { 
        name: "mass", 
        formula: 2.204, 
        unit1: "kilos", 
        unit2: "pounds", 
        conversionType: convertMass
    }
];

covertBtn.addEventListener("click", function() {
    let unitValue = Number(inputUnit.value);
    if (inputUnit.value === "" || isNaN(unitValue)) {
        errorDisplay.textContent = "Enter a valid number!";
    } else {
        errorDisplay.textContent = "";    
        for( let i = 0; i < myArray.length; i++ ) {
            const result1 = (unitValue * myArray[i].formula).toFixed(3);
            const result2 = (unitValue / myArray[i].formula).toFixed(3);
            myArray[i].conversionType.innerHTML = `${unitValue} ${myArray[i].unit1} = ${result1} ${myArray[i].unit2} | ${unitValue} ${myArray[i].unit2} = ${result2} ${myArray[i].unit1}`;
        }
    }
});

let themeBtn = document.querySelector(".theme-btn");
let themeIcon = document.getElementById("theme-icon");
let lightIcon = document.getElementById("light-icon");
let darkIcon = document.getElementById("dark-icon");

themeBtn.addEventListener("click", function() {
    document.documentElement.classList.toggle("force-light");
    lightIcon.classList.toggle("show");
    darkIcon.classList.toggle("hide");
});