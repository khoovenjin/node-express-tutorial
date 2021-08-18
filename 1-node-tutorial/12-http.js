// HTTP Module

const http = require('http')

// Create Server
const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Whelcome to our home page')
    }
    if(req.url === '/about'){
        res.end('This is our history')
    }
    res.end(`
        <h1>Oops!</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href ="/">back home</a>
    `)
})

// Create Server Port Listening to
server.listen(5000)