'use strict'

const path = require('path')
const express = require('express')
const webpack = require('webpack')
const webpackMiddleware = require('webpack-dev-middleware')
const config = require('./webpack.config')

const app = express()
const compiler  = webpack(config)

app.use(express.static(__dirname + '/build'))
app.use(webpackMiddleware(compiler))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build/index.html'))
})


app.listen(3000, () => { console.log('listening on port: 3000...')})
