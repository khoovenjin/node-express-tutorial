const express = require('express')
const app = express()
const logger = require('./logger')

// Process: req => middleware => res
// Middleware has 2 terminating options:
// 1) Pass on to next middleware
// 2) Terminate with sending response
// Middleware Example : in logger.js (a good practice to put in a seperate file)
// In case of applying middleware to all routes, you can use APP.USE(middleware)
// to apply the same middleware to all routes (app.get)

// The sequence of app.use(logger) is important to make sure all routes uses it
// App.use can be added with a path but will be applied to ONLY routes that includes the path
// Example below: the logger wont work on home and about but will work on products and items
app.use('/api',logger)

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

// Original Code
// app.get('/', logger, (req,res) => {
//     res.send('Home Page')
// })

// app.get('/About', logger, (req,res) => {
//     res.send('About Page')
// })

app.listen(5000, () => {
    console.log('Server is listening on port 5000...');
})