var euler = (function () {
    return {
        multiplesOfNaturalNumbers: function(x, y, until) {
            var sumOfMultiplesOf3 =0 , sumOfMultiplesOf5 = 0, sumOfMultiplesof3N5 = 0;
            for (var i=0; i < until; i++) {
                if (i % x === 0 && i % y != 0) {
                    sumOfMultiplesOf3 += i;
                }
                if (i % y === 0 && i % x != 0) {
                    sumOfMultiplesOf5 += i;
                }
                if (i % x===0 && i % y ===0 ) {
                    sumOfMultiplesof3N5 += i;
                }
            }
            return sumOfMultiplesOf3 + sumOfMultiplesOf5 + sumOfMultiplesof3N5;
        },

        multiplesOfNaturalNumbers3N5: function(max) {
            var result = 0;
            var i = 0;

            while (i < max) {
                console.log(i);
                if (i % 5 == 0 || i % 3 == 0) {
                    result += i;
                }
                i++;
            }
            return result;
        },

        fibonacciNumbers: function (max) {
            var x = 1;
            var y = 1;
            var sum = 0;
            var total = 0;

            while (x < max) {
                sum = x + y;
                x = y;
                y = sum;

                if (x < max && x % 2 === 0) {
                    total += x;
                }
                // console.log(x + " " + y + " " + sum);
            }
            return total;
        },

        primeFactors: function (num) {
            var sqrt = Math.floor(Math.sqrt(num));
            var prime = [];
            var isPrime = true;

            for (var i = 2; i <= sqrt; i++) {
                if (i % 2 == 0 && i != 2) {
                    // prime[i] = null;
                }
                for (var j = 2; j*j <= i; j++) {
                    if (i % j == 0) {
                        isPrime = false;
                        break;
                    }
                }
                if(isPrime) prime[i] = i;
            }

            // arguments.callee(result);
            return prime;
        }

    }
}());

// Param (x, y, max)

var result2 = euler.multiplesOfNaturalNumbers3N5(1000);
var child = document.createElement('p');
child.innerText = "1. The Multiples of 3 and 5 is " + result2;
document.body.appendChild(child);

var until = 4000000;
var resultFibo = euler.fibonacciNumbers(until);
var childFibo = document.createElement('p');
childFibo.innerText = "2. The sum of even Fibonacci numbers " + until + " is " + resultFibo;
document.body.appendChild(childFibo);


var childFibo = document.createElement('p');
childFibo.innerText = "3. Largest prime factor is " + (600851475143 / 3)
    euler.primeFactors(600851475143);
document.body.appendChild(childFibo);
