/**
 * Created by jongmin.kim on 10/02/2017.
 */
export function question4 () {
    var time = new Date().getTime(), result = 0;

    function reverse(s) {
        var o = '';
        for (var i = s.length - 1; i >= 0; i--)
            o += s[i];
        return o;
    }

    function isPalindromeString(num) {
        if (num.toString() === reverse(num.toString())) {
            return true;
        } else {
            return false;
        }
    }

    var a = 999;
    while (a > 99) {
        var b = 999;
        while (b >= a) {
            let prod = a * b;
            if (prod > result && isPalindromeString(prod)) {
                result = prod;
            }
            b--;
        }
        a--;
    }
    return result + " and this tasks " + (Date.now() - time) / 1000 + " seconds.";
}
