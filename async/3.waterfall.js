/**
 * Created by ShanGuo on 2017/6/18.
 */
const async = require('async');
/**
 * waterfall 串行任务，上一个任务完成后，才能开启下一个任务；
 * 上一个任务的返回值会传给下一个任务；
 */
async.waterfall([
    //第一个任务；
    function (cb) {
        setTimeout(function () {

            cb(null,'N')
        },3000)
    },
    function (data, cb) { //data = N
        setTimeout(function () {
            cb(null,data+"B")
        },2000)
    },
    function (data,cb) {
        setTimeout(function () {
            cb(null,data+'A')
        },1000)
    }
//    result 是最有一个任务的返回值；而不是数组。
],function (err,result) {
    console.log(result);
});