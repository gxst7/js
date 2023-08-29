'use strict';

function greet() {
    let name = prompt('Enter your name: ', 'noname');
    alert(`Hi ${name}!`);
}

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

greet();
askAge();