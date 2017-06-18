/**
 * Created by ShanGuo on 2017/6/18.
 */
let Movie = require('../model');
let async = require('async');
const debug = require('debug')('crawl:write');

module.exports = function (movies, callback) {
    async.forEach(movies, function (movie, cb) {
        Movie.create(movie, cb);
        debug(`写入电影${movie.name}`)
    }, callback)
};