/**
 * Created by ShanGuo on 2017/6/18.
 */
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/craw');

let MovieSchema = new mongoose.Schema({
    name: String,
    url: String
});
module.exports = mongoose.model('Movie', MovieSchema);

// exports.Movie = mongoose.model('Movie', MovieSchema);
