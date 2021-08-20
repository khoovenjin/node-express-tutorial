const express = require('express')
const app = express()
const morgan = require('morgan')
const logger= require('./logger')
const authorize = require('./authorize')

// Can use multiple middlewares, executed sequentially from left to right
// app.use([logger, authorize])
// Morgan is a third-party middleware
app.use(morgan('tiny'))

app.get('/', (req,res) => {
    res.send('Home Page')
})

app.get('/about', (req,res) => {
    res.send('About Page')
})

app.get('/api/products', (req,res) => {
    res.send('Product Page')
})

app.get('/api/items', (req,res) => {
    res.send('Items Page')
})

app.listen(5000, ()=>{
    console.log('Server listening on port 5000...');
})