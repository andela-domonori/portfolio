import React from 'react'
import ReactDOM from 'react-dom'
import routes from './routes'
import './../styles/main.styl'
require('bootstrap/dist/css/bootstrap.css')


ReactDOM.render(routes, document.getElementById('app'))
