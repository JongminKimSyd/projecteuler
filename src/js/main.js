import React from 'react';
import ReactDOM from 'react-dom';

import {question1} from './questions/question1.js';
import {question2} from './questions/question2.js';
import {question3} from './questions/question3.js';
import {question4} from './questions/question4.js';
import {question5} from './questions/question5.js';
import {question6} from './questions/question6.js';
import {question7} from './questions/question7.js';

var questions = [
    {title: "The Multiples of 3 and 5 is", answer: question1(1000)},
    {title: "The sum of even Fibonacci numbers", answer: question2(4000000)},
    {title: "Largest prime factor is", answer: question3(600851475143)},
    {title: "Largest palindrome product is", answer: question4()},
    {title: "Smallest multiple is ", answer: question5(1, 20)},
    {title: "Sum square difference is ", answer: question6()},
    {title: "10000th prime number is ", answer: question7(1e4 + 1)}
];

var questionLIs = questions.map(function(item, i){
    return <li key={'question_' + i}>{item.title}{item.answer}</li>
});

var Answers = React.createClass({
    render: function () {
        return <ol>{questionLIs}</ol>
    }
});

ReactDOM.render(<Answers />, document.getElementById('app'));
