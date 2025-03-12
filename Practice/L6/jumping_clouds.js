// function jumpingOnClouds(c, k) {
//     let e = 100;
// let n = c.length;
// let i = 0;
// while (true) {
//    i = (i + k) % n;
//    e--;
//    if (c[i] === 1) {
//        e -= 2;
//    }
//    if (i === 0) break;
// }
// return e;
// }
// console.log(jumpingOnClouds([0,0,1,0,0,1,1,0] , 2));

let i = 0;
let k = 2;
let n = 8;

let r = (i+k)%n;

console.log(r);