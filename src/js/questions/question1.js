/**
 * Created by jongmin.kim on 10/02/2017.
 */
export function question1 (maxNumber) {
    var time = new Date().getTime(), result = 0, i = 0;

    while (i < maxNumber) {
        if (i % 5 === 0 || i % 3 === 0) {
            result += i;
        }
        i++;
    }
    return result + " and this task " + (Date.now() - time) / 1000 + " seconds.";
}
