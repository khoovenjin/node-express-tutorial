// Streams
// ReadStreams are used to readstreams of big file where normal variable are unable to store them
// ReadStreams read data in 64 kilobytes chunks
// default 64kb
// last buffer - remainder
// highWaterMark - control size of buffer (default: 64kb)
// const stream = createReadStream('./content/big.txt', { highWaterMark: 90000})
// const stream = createReadStream('../content/big.txt', { encoding: 'utf8'})
const { createReadStream } = require('fs')

const stream = createReadStream('./content/first.txt', { highWaterMark: 90000, encoding: 'utf8'})

stream.on('data', (result) => {
    console.log(result)
})

stream.on('error',(err) => {
    console.log(err);
})