/**
 * Created by ShanGuo on 2017/6/18.
 */
const read = require('./read');
const write = require('./write');
const async = require('async');
const Movie = require('../model');
const debug = require('debug')('crawl:main');

const url = "http://top.baidu.com/buzz?b=26&c=1";


let start = function () {
    async.waterfall([
        //1 清空数据库；
        function (cb) {
            Movie.remove({}, cb)
        },
        //2 读数据；
        function (data,cb) {
            read(url,cb)
        },
        //3 写数据；
        function (movies,cb) {
            write(movies,cb)
        }
    ],function (err,result) {
        console.log("全部任务执行完毕");
    })
};
start();