const express = require('express')
const App = express()
const port = 3000
App.use(express.json())
const routes = require('./routes/route')
App.use('/',routes)
App.listen(port, () => {
    console.log('Servidor funcionando')
})