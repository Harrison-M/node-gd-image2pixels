var gd = require('node-gd'),
    i2p = require('../index.js');

gd.openPng('lintwar.png', function(err, input_img){
    var pixels = i2p(input_img);
    console.log(pixels);
    console.log(pixels.length);
    console.log(pixels[0].length);
});
