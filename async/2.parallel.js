/**
 * Created by ShanGuo on 2017/6/18.
 */
const async = require('async');
console.time('cost');
async.parallel([
    function (cb) {
        setTimeout(function () {
            console.log(1);
            cb(null,'a') //cb只能回掉一次，
        },3000)
    },
    function (cb) {
        setTimeout(function () {
            console.log(2);
            cb(null,'b')
        },0)
    },
    function (cb) {
        setTimeout(function () {
            console.log(3);
            cb(null,'c')
        },1000)
    }
    //结果中数字的顺序，和执行完成的先后无关，和排列顺序有关。
],function (err,result) {
    console.log(err);
    console.log(result);//[ 'a', 'b', 'c' ]
    console.timeEnd('cost')
});