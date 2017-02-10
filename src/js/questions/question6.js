/**
 * Created by jongmin.kim on 10/02/2017.
 */
export function question6 () {
    //1 pow 2 + 2 pow 2 .... + 10 pow 2 = 385
    //(1 + 2 .... + 10) pow 2 = 3025
    // 3025 - 385 = 2640

    var time = new Date().getTime(), result_1 = 0, inside = 0;

    for (var i = 1; i <= 100; i++) {
        result_1 += Math.pow(i, 2);
        for (var e = 1; e <= 100; e++) {
            inside += e;
        }
    }
    var result = Math.pow(inside, 2) - result_1;
    return result + " and this tasks " + (Date.now() - time) / 1000 + " seconds.";
}
