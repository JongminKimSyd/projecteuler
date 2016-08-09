/**
 * Created by jongmin.kim on 8/9/2016.
 */
var pro10 = require('./problem10.js');

function nine() {
    // a^2 + b^2 + c^2 = 1000

    num = Math.pow(a, 2) + Math.pow(b, 2) + Math.pow(c, 2);
    return num;
}



console.log(pro10.getPrimes(2e6));
document.write(pro10.getPrimes(2e6));
