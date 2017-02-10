/**
 * Created by jongmin.kim on 10/02/2017.
 */
export function question5 (min, max) {
    // result % 1 ... 10 == 0
    // result % min ... max == 0

    var time = new Date().getTime();

    for (var i = max; i <= Number.MAX_SAFE_INTEGER; i++) {
        var found = true;
        for (var e = min; e <= max; e++) {
            if (i % e !== 0) {
                found = false;
                break;
            }
        }
        if (found) {
            var result = i;
            return result + " and this tasks " + (Date.now() - time) / 1000 + " seconds.";
        }
    }
}
