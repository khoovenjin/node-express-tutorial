const express = require('express')
const app = express()
const people = require('./13-router-people')
const auth = require('./14-router-auth')

// Static assets (middleware)
app.use(express.static('../methods-public'))
// parse form data (middleware) for html method
app.use(express.urlencoded({ extended: false }))
//parse json (middleware) for axios method
app.use(express.json())

app.use('/api/people', people)

app.use('/login', auth)

app.listen(5000, ()=>{
    console.log('Server listening on port 5000...');
})