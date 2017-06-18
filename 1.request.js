/**
 * Created by ShanGuo on 2017/6/18.
 */
//request 爬虫用；
const request = require('request');
const cheerio = require('cheerio');
//iconv转码使用
const iconv = require('iconv-lite');
let url = 'http://top.baidu.com/category?c=1&fr=topindex';

let categories = [];

/**
 * err 错误对象；
 * response 响应对象；
 * body 响应体；
 * {url, encoding: null} 返回buffer
 * toString('gb2312'); 把buffer转成指定编码格式的string，
 */
request({url, encoding: null}, function (err, response, body) {
    // body.toString('gb2312');//node不支持指定此格式；
    body = iconv.decode(body, 'gbk');
    let $ = cheerio.load(body);
    $('.hd .title a').each(function (index, item) {
        let $this = $(this);
        let category = {
            name: $this.text(),
            url: $this.attr('href')
        };
        let result = category.url.match(/b=(\d+)/);
        category.id = result[1];//26 27
        categories.push(category);
    });
    console.log(categories);

});

//把HTML变成DOM树；
// let $ = cheerio.load(html);

