console.log('Express Tutorial');

const http = require('http')
const {readFileSync} = require('fs')
const homePage = readFileSync('./navbar-app/index.html')
const homeStyles = readFileSync('./navbar-app/styles.css')
const homeImage = readFileSync('./navbar-app/logo.svg')
const homeLogic = readFileSync('./navbar-app/browser-app.js')

const server = http.createServer((req,res)=>{
    // writeHead is to write more metadata about the response, first is
    // status code, second is content type so the browser knows how to render
    // A better practice; content in res.write but ALWAYS include res.end() at last
    // IF content type is text/plain then browser treats it as text file
    const url = req.url
    if(url === '/'){
        res.writeHead(200, {'content-type':'text/html'})
        console.log('user hit the server');
        res.write(homePage)
        res.end()
    }else if(url === '/about'){
        res.writeHead(200, {'content-type':'text/html'})
        console.log('user hit the server');
        res.write('<h1>about page</h1>')
        res.end()
    }else if(url === '/styles.css'){
        res.writeHead(200, {'content-type':'text/css'})
        console.log('user hit the server');
        res.write(homeStyles)
        res.end()
    }else if(url === '/logo.svg'){
        res.writeHead(200, {'content-type':'image/svg+xml'})
        console.log('user hit the server');
        res.write(homeImage)
        res.end()
    }else if(url === '/browser-app.js'){
        res.writeHead(200, {'content-type':'text/javascript'})
        console.log('user hit the server');
        res.write(homeLogic)
        res.end()
    }
    else{
        res.writeHead(400, {'content-type':'text/html'})
        console.log('user hit the server');
        res.write('<h1>error</h1>')
        res.end()
    }
    // console.log(res.method) : to show what HTTP method
    // console.log(res.url) : to show what URL
})

// In reality ports between 0 - 1024 is already taken for specific purpose
// In development the port number is arbitrary
server.listen(5000)