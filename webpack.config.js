'use strict';
const webpack = require('webpack')

let config = {
  entry:'./index.js',
  devServer:{
    inline:true,
    port:3333
  }
}

module.exports = config
