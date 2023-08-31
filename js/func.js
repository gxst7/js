'use strict';

// Function Declaration
function greet() {
    let name = prompt('Enter your name: ', 'noname');
    alert(`Hi ${name}!`);
}

// Function Expression
let askAge = function() {
    let age = prompt('Enter your age: ', 18);
    let message;
    if (age < 18) {
        message = 'too young';
    } else if (age >= 18 && age < 50) {
        message = 'nice';
    } else {
        message = 'old';
    }

    alert(message);
};

// Arrow Function
let sum = (a, b) => a + b;

greet();
askAge();
alert(sum(47, 73));