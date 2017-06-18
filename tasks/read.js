/**
 * Created by ShanGuo on 2017/6/18.
 */
/**
 * 1. 向网址发出请求得到响应体u；
 * 2. 把得到的buffer转换成字符串;
 * 3. 操作DOM元素，找到制定内容；
 * @type {string}
 */
const request = require('request');
const iconv = require('iconv-lite');
const cheerio = require('cheerio');
const debug = require('debug')('crawl:read');

module.exports = function (url, callback) {
    //不指定解码方式；
    request({url, encoding: null}, function (err, response, body) {
        body = iconv.decode(body, 'gbk');

        let movies = [];
        let $ = cheerio.load(body);
        $('.keyword a.list-title').each(function () {
            let $this = $(this);
            let movie = {
                name: $this.text(),
                url: $this.attr('href')
            };
            debug(`读到电影：${movie.name}`);
            movies.push(movie);
        });
        callback(err, movies);
    })
};

//用于测试使用；
// module.exports(url, function (err, movies) {
//     // console.log(movies);
//
// });