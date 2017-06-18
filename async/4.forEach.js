/**
 * Created by ShanGuo on 2017/6/18.
 */
const fs = require('fs');
const async = require('async');
let data = [
    {filename: '1.txt', content: '1'},
    {filename: '2.txt', content: '2'},
    {filename: '3.txt', content: '3'}
];

/**
 * 传统方法
 */
// let count = 0;
// data.forEach(function (item) {
//     fs.writeFile(item.filename, item.content, function (err) {
//         count++;
//         if(count ===item.length){
//             console.log("全部写入完成");
//         }
//     })
// });


/**
 * async 方法
 * 第一个参数：迭代的数组；
 * 第二个参数，针对每个数组元素需要执行的方法；
 * 第三个参数，最终的回掉函数；
 */
// async.forEach(data,
//     function (item,cb,) {
//     fs.writeFile(item.filename,item.content,cb)
// },
//     function (err) {
//     console.log("全部写入完成");
//
// });

async.forEach(data, function(item,cb){
    fs.writeFile(item.filename,item.content,cb);
}, function(err){
    console.log('全部写入完毕');
});

