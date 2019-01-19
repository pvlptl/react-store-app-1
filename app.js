const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const config = require('./config/config');

const app = express();

mongoose.connect(config.mongoose.uri, config.mongoose.options, function (err) {
    if (err) console.log(err);
    mongoose.set('debug', true);
    console.log('mongoose connected');
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// use routes
const productsRouter = require('./routes/api/products');
app.use('/api/products', productsRouter);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

module.exports = app;
