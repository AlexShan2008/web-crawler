/**
 * Created by ShanGuo on 2017/6/18.
 */
/**
 * 按顺序加载文件；
 * 传统方法安装回掉方式；
 *
 */

const async = require('async');

/**
 * series 串行执行，按先后顺序执行；
 * 任务执行总时间，等于每个任务执行的时间总和。
 * 第一个参数[]  传入的任务;
 * 第二个参数    回掉函数;
 * 回掉函数，让外部了解函数内部情况，需要传入callback，否则执行完函数就结束了。
 * 如果callback（err , ''）如果出入err或者任意消息，不会继续执行其它函数。
 */
async.series([
    function (callback) {
        setTimeout(function () {
            console.log(1);
            callback(null, '1111')
        }, 3000)
    },
    function (callback) {
        setTimeout(function () {
            console.log(2);
            callback(null, '2')
        }, 2000)
    }
], function (err, result) {
    setTimeout(function () {
        console.log('end');
        console.log(result);//[ '1111', '2' ] 结果为所有任务返回的结果数组。
    })

});//串行


// series([
//     function (callback) {
//         setTimeout(function () {
//             console.log(1);
//             callback(null, '1111')
//         }, 3000)
//     },
//     function (callback) {
//         setTimeout(function () {
//             console.log(2);
//             callback(null, '2')
//         }, 2000)
//     }
// ], function (err, result) {
//     setTimeout(function () {
//         console.log('end');
//         console.log(result);//[ '1111', '2' ] 结果为所有任务返回的结果数组。
//     })
// });//串行

function series(tasks, callback) {
    let index = 0;
    let result = [];
    let next = (err, data) => {
        if(index>0){
            result.push(data);
        }
        if (index === tasks.length || err) {
            callback(err, result);
        } else {
            let task = tasks[index++];
            task(next);
        }

    };
    next();
}
