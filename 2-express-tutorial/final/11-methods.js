const express = require('express')
const app = express()
let {people} = require('./data')

// Static assets (middleware)
app.use(express.static('./methods-public'))
// parse form data (middleware) for html method
app.use(express.urlencoded({ extended: false }))
//parse json (middleware) for axios method
app.use(express.json())

// HTTP GET (Default method)
// This for HTML method
app.get('/api/people', (req, res) =>{
    res.status(200).json({success: true, data: people})
})

// This for Axios method
app.post('/api/people', (req,res)=>{
    const {name} = req.body
    if(!name){
        return res.status(400).json({success: false, msg: 'please provide name value'})
    }
    res.status(201).json({success: true, person: name})
})

// HTTP POST (Insert)
// POST can be done in 2 ways:
// 1) HTML action & method
// 2) JavaScript using Axios Package by CloudFlare
app.post('/login', (req,res) =>{
    const {name} = req.body
    if(name){
        console.log(req.body);
        return res.status(200).send(`Welcome ${name}`)
    }
    
    res.status(401).send('Please provide credentials')
})

app.listen(5000, ()=>{
    console.log('Server listening on port 5000...');
})