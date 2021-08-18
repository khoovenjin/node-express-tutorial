const {readFile, writeFile} = require('fs')

// Using a Sync Read File will need Callbacks
// This is example of Callback hell : Nested callbacks
// This is better than Sync in User Response because no blocking state
// App starts, hands function over to user, proceed next task, user done with function 
// Alternatives: Promises, Async Await

console.log('start');
readFile('./content/first.txt', 'utf8', (err,result)=>{
    if(err){
        console.log(err);
        return
    }
    const first = result;
    readFile('./content/second.txt', 'utf8', (err,result)=>{
        if(err){
            console.log(err);
            return
        }
        const second = result;
        writeFile('./content/result-async.txt', `Here is the result : ${first}, ${second}`, (err,result)=>{
            if(err){
                console.log(err);
                return
            }
            console.log('done with this task');
        })
    })
})
console.log('starting the next task');