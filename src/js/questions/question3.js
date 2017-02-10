/**
 * Created by jongmin.kim on 10/02/2017.
 */
export function question3 (num) {
    var time = new Date().getTime(), sqrt = Math.floor(Math.sqrt(num));
    var result = [];
    var x = 0;

    for (var i = 2; i <= sqrt; i++) {
        if (num % i === 0 && i !== 2) {
            result[x] = i;
            x++;
        }
    }
    return result + " and this task " + (Date.now() - time) / 1000 + " seconds.";
}
