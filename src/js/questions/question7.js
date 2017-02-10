/**
 * Created by jongmin.kim on 10/02/2017.
 */
export function question7 (index) {
    // 2, 3, 5, 7, 11, 13, 17, 23
    var time = new Date().getTime(), i, primes = [2, 3], n = 5;

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
    var result = primes[index - 1]
    return result + " and this tasks " + (Date.now() - time) / 1000 + " seconds.";
}
