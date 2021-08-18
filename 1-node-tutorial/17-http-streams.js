// Sending a big file over the internet is unwise (1.8mb file example) using sync readfile
// Solution: by using readStream u can send them in chunks on the network while transfering the file

var http = require('http')
var fs = require('fs')

http.createServer(function (req, res) {
    // const text = fs.readFileSync('./content/first.txt', 'utf8')
    // res.end(text)
    const fileStream = fs.createReadStream('./content/first.txt', 'utf8')
    fileStream.on('open', ()=>{
        // Pipe pushes the read stream into write stream
        fileStream.pipe(res)
    })
    fileStream.on('error', (err)=>{
        res.end(err)
    })
}).listen(5000)