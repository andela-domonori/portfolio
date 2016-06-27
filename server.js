'use strict'

import path from 'path'
import express from 'express'
import webpack from 'webpack'
import webpackMiddleware from 'webpack-dev-middleware'
import config from './webpack.config'

const app = express()
const compiler  = webpack(config)

app.use(express.static(__dirname + '/build'))
app.use(webpackMiddleware(compiler))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build/index.html'))
})


app.listen(3000, () => { console.log('listening on port: 3000...')})
