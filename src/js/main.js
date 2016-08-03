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
            var time = new Date().getTime();

            while (i < max) {
                // console.log(i);
                if (i % 5 == 0 || i % 3 == 0) {
                    result += i;
                }
                i++;
            }
            return result + " and this tasks " + (Date.now() - time) / 1000 + " seconds.";
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
            var time = new Date().getTime();

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

            return max_palindrome + " and this tasks " + (Date.now() - time) / 1000 + " seconds.";


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
        },
        SumSquareDifference: function () {
            //1 pow 2 + 2 pow 2 .... + 10 pow 2 = 385
            //(1 + 2 .... + 10) pow 2 = 3025
            // 3025 - 385 = 2640

            var result_1 = 0;
            for (var i = 1; i <= 100; i++) {
                result_1 += Math.pow(i, 2);
                var inside = 0;
                for (var e = 1; e <= 100; e++) {
                    inside += e;
                }
                var result_2 = Math.pow(inside, 2);
            }
            return result_2 - result_1;
        },
        Prime: function (index) {
            // 2, 3, 5, 7, 11, 13, 17, 23
            var i, primes = [2, 3], n = 5;

            function isPrime(n) {
                let i = 1, p = primes[i],
                    limit = Math.ceil(Math.sqrt(n));
                while (p <= limit) {
                    if (n % p === 0) {
                        return false;
                    }
                    i += 1;
                    p = primes[i];
                }
                return true;
            }

            for (i = 2; i <= index; i += 1) {
                while (!isPrime(n)) {
                    n += 2;
                }
                primes.push(n);
                n += 2;
            }
            return primes[index - 1];
        }
    }
}());

function display(number, msg, fn) {
    var element = document.createElement('p');
    element.innerText = number + ". " + msg + " " + fn;
    document.body.appendChild(element);
}

// var result2 = euler.multiplesOfNaturalNumbers3N5(1000);
// var child = document.createElement('p');
// child.innerText = "1. The Multiples of 3 and 5 is " + result2;
// document.body.appendChild(child);

// display(1, "The Multiples of 3 and 5 is", euler.multiplesOfNaturalNumbers3N5(1000));
// display(2, "The sum of even Fibonacci numbers", euler.fibonacciNumbers(4000000));
// display(3, "Largest prime factor is", euler.primeFactors(600851475143));
// display(4, "Largest palindrome product is", euler.Palindrome());
// display(5, "Smallest multiple is ", euler.SmallestMultiple(1, 20));
// display(6, "Sum square difference is ", euler.SumSquareDifference());

display(7, "Sum square difference is ", euler.Prime(1e4 + 1));

