/**
 * Created by jongmin.kim on 8/9/2016.
 */

'use strict';

 module.exports = function () {
    return {
        solution: function (num) {
            // var temp = this.isPrime(num);
            var temp = this.getPrimes(num);
            var result = 0;
            for (var i = 0; i < temp.length; i++) {
               result += temp[i];
            }
            return result;
        },
        primeFactor: function (num) {
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

        getPrimes: function (max) {
        var sieve = [], i, j, primes = [];
        for (i = 2; i <= max; ++i) {
            if (!sieve[i]) {
                // i has not been marked -- it is prime
                primes.push(i);
                for (j = i * 2; j <= max; j += i) {
                    sieve[j] = true;
                }
            }
        }
        return primes;
        },

        isPrime: function (num) {
            'use strict'
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

            for (i = 2; i <= num; i += 1) {
                while (!isPrime(n)) {
                    n += 2;
                }
                primes.push(n);
                n += 2;
            }
            return primes;
        }
    }
}();
