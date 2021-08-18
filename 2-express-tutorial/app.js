console.log('Express Tutorial');

const http = require('http')

const server = http.createServer((req,res)=>{
    // writeHead is to write more metadata about the response, first is
    // status code, second is content type so the browser knows how to render
    // A better practice; content in res.write but ALWAYS include res.end() at last
    // IF content type is text/plain then browser treats it as text file
    res.writeHead(200, {'content-type':'text/html'})
    console.log('user hit the server');
    res.write('<h1>home page</h1>')
    res.end()
    // console.log(res.method) : to show what HTTP method
    // console.log(res.url) : to show what URL
})

// In reality ports between 0 - 1024 is already taken for specific purpose
// In development the port number is arbitrary
server.listen(5000)