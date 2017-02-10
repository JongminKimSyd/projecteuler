import {question1} from './questions/question1.js';
import {question2} from './questions/question2.js';
import {question3} from './questions/question3.js';
import {question4} from './questions/question4.js';
import {question5} from './questions/question5.js';
import {question6} from './questions/question6.js';
import {question7} from './questions/question7.js';



function display(number, msg, fn) {
    var element = document.createElement('p');
    element.innerText = number + ". " + msg + " " + fn;
    document.body.appendChild(element);
}

(function () {
    var time = new Date().getTime();
    display(1, "The Multiples of 3 and 5 is", question1(1000));
    display(2, "The sum of even Fibonacci numbers", question2(4000000));
    display(3, "Largest prime factor is", question3(600851475143));
    display(4, "Largest palindrome product is", question4());
    display(5, "Smallest multiple is ", question5(1, 20));
    display(6, "Sum square difference is ", question6());
    display(7, "10000th prime number is ", question7(1e4 + 1));
    return console.log((Date.now() - time)/1000, 'seconds');
})(window);

