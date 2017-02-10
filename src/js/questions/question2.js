/**
 * Created by jongmin.kim on 10/02/2017.
 */
export function question2 (max) {
    var time = new Date().getTime(), x = 1, y = 1, sum = 0, result = 0;

    while (x < max) {
        sum = x + y;
        x = y;
        y = sum;

        if (x < max && x % 2 === 0) {
            result += x;
        }
    }
    return result + " and this task " + (Date.now() - time) / 1000 + " seconds.";
}
