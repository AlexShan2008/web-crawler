/**
 * Created by ShanGuo on 2017/6/18.
 */
const express = require('express');
const app =express();
const Movie = require('./model');
let path = require('path');
app.set('view engine','ejs');

app.use(express.static(path.resolve('node_modules')));
app.get('/',function(req,res){
    Movie.find({},function (err,movies) {
        res.render('index',{movies});
    })
});


app.listen(8080);