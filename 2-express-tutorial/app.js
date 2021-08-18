const express = require('express')
const app = express();
const path = require('path')

// set up static and middleware
app.use(express.static('./public'))

// This app get has 2 options:
// 1) put in static assets like above : but its better to dp it this way
// 2) Server Side Rendering by using template engines
app.get('/', (req,res) =>{
    res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
})

app.all('*', (req, res)=>{
    res.status(404).send('resource not found')
})

app.listen(5000, () =>{
    console.log('server is listening on port 5000...');
})