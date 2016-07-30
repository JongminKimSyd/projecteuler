var euler = (function () {
    return {
        // multiplesOfNaturalNumbers: function(x, y, until) {
        //     var sumOfMultiplesOf3 =0 , sumOfMultiplesOf5 = 0, sumOfMultiplesof3N5 = 0;
        //     for (var i=0; i < until; i++) {
        //         if (i % x === 0 && i % y != 0) {
        //             sumOfMultiplesOf3 += i;
        //         }
        //         if (i % y === 0 && i % x != 0) {
        //             sumOfMultiplesOf5 += i;
        //         }
        //         if (i % x===0 && i % y ===0 ) {
        //             sumOfMultiplesof3N5 += i;
        //         }
        //     }
        //     return sumOfMultiplesOf3 + sumOfMultiplesOf5 + sumOfMultiplesof3N5;
        // },

        multiplesOfNaturalNumbers3N5: function(max) {
            var result = 0;
            var i = 0;

            while (i < max) {
                // console.log(i);
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
            var x = 0;

            for (var i = 2; i <= sqrt; i++) {
                if (num % i == 0 && i != 2) {
                    prime[x] = i;
                    x++;
                }
            }
            return prime;
        },

        Palindrome: function () {
            var max_palindrome = 0;

            var a = 999;
            while (a > 99) {
                var b = 999;
                while (b >= a) {
                    prod = a * b;
                    if (prod > max_palindrome && isPalindromeString(prod)) {
                        max_palindrome = prod;
                    }
                    b--;
                }
                a--;
            }

            function isPalindromeString(num) {
                if (num.toString() == reverse(num.toString())) {
                    return true;
                } else {
                    return false;
                }

            }

            function reverse(s) {
                var o = '';
                for (var i = s.length - 1; i >= 0; i--)
                    o += s[i];
                return o;
            }

            return max_palindrome;


            // function isPalindrome(num) {
            //
            //     var reversed = 0;
            //     var original = num;
            //
            //     if (num < 10) return true;
            //     if (num % 10 == 0) return false;
            //
            //     while (num >= 1) {
            //         reversed = (reversed * 10) + (num % 10);
            //         num = num / 10;
            //     }
            //
            //     if (original == reversed) {
            //         return true;
            //     }
            //     else {
            //         return false;
            //     }
            // }
        },

        SmallestMultiple: function (min, max) {
            // result % 1 ... 10 == 0
            // result % min ... max == 0

            var time = new Date().getTime();

            for (var i = max; i <= Number.MAX_SAFE_INTEGER; i++) {
                var found = true;
                for (var e = min; e <= max; e++) {
                    if (i % e != 0) {
                        found = false;
                        break;
                    }
                }
                if (found) {
                    return i + " and this tasks " + (Date.now() - time) / 1000 + " seconds.";
                }
            }


            // var conditionSet = function (result, min, max) {
            //     var conditionArr = [];
            //     for (var i = min; i <= max; i++) {
            //         if (result % i == 0) {
            //             conditionArr[i] = true;
            //         } else {
            //             conditionArr[i] = false;
            //         }
            //     }
            //     if (conditionArr.includes(false)) {
            //         return conditionSet (result + 1, min, max);
            //     } else {
            //         return result;
            //     }
            // }
            //
            // return conditionSet (result + 1, min, max);
        }
    }
}());

function display(number, msg, fn) {
    var element = document.createElement('p');
    element.innerText = number + ". " + msg + " " + fn;
    document.body.appendChild(element);
}

var result2 = euler.multiplesOfNaturalNumbers3N5(1000);
var child = document.createElement('p');
child.innerText = "1. The Multiples of 3 and 5 is " + result2;
document.body.appendChild(child);

var until = 4000000;
var resultFibo = euler.fibonacciNumbers(until);
child.innerText = "2. The sum of even Fibonacci numbers " + until + " is " + resultFibo;
document.body.appendChild(child);



child.innerText = "3. Largest prime factor is " + euler.primeFactors(600851475143);
euler.primeFactors(600851475143);
document.body.appendChild(child);

var Palindrome = document.createElement('p');
Palindrome.innerText = "4. Largest palindrome product is " + euler.Palindrome();
document.body.appendChild(Palindrome);

display(5, "Smallest multiple is ", euler.SmallestMultiple(1, 20));
