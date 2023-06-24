const prompt = require("prompt-sync")({sigint: true});


// Solving for the  area of a triangle
function Area(base, height) {
    return (1/2 * base * height);
}

//Input values for base and height
let number1 = parseFloat(prompt("Enter the base: "));
let number2 = parseFloat(prompt("Enter the height: "));

let result = Area(number1, number2);
 //The output will be displayed in this form
console.log("The area of the triangle is " +   result);
