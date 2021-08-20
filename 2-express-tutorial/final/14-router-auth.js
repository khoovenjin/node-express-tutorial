const express = require('express')
const router = express.Router()

// HTTP POST (Insert)
// POST can be done in 2 ways:
// 1) HTML action & method
// 2) JavaScript using Axios Package by CloudFlare
// This is HTML method
router.post('/', (req,res) =>{
    const {name} = req.body
    if(name){
        console.log(req.body);
        return res.status(200).send(`Welcome ${name}`)
    }
    
    res.status(401).send('Please provide credentials')
})

module.exports = router