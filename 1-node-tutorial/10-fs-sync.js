const {readFileSync, writeFileSync} = require('fs')

// JavaScript is executing these codes line by line
// This is synchronous execution : Run with blocking state
// Slow Performance, Low User Experience

console.log('start');
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

console.log(first, second)

writeFileSync('./content/result-sync.txt', `Here is the result : ${first}, ${second}`, { flag: 'a' })

console.log('done with this tasks');
console.log('starting the next one');