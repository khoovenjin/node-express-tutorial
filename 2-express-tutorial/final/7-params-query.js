const express = require('express')
const app = express()
const {products} = require('./data')

app.get('/', (req,res) =>{
    res.send('<h1>Home Page</h1><a href = "/api/products">products</a>')
})

app.get('/api/products', (req,res)=>{
    // Selecting certain attributes of JSON
    const newProducts = products.map((product)=>{
        const {id,name,image} = product;
        return {id,name,image}
    })
    res.json(newProducts)
})

// This is an overkill to set up each product 1 by 1
// Express has an alternative: using route parameters
// app.get('/api/products/1', (req,res)=>{
//     const singleProduct = products.find((product)=> product.id === 1)
//     res.json(singleProduct)
// })
app.get('/api/products/:productID', (req,res)=>{
    // req.params returns the parameters of the request; the value of :ProductID
    // Route Parameters act as value placeholders (dynamic)
    const {productID} = req.params;
    // If the database product id is set up as string then no need to parse to Number
    const singleProduct = products.find((product)=> product.id === Number(productID))
    if(!singleProduct){
        return res.status(404).send('Product Does Not Exists')
    }
    return res.json(singleProduct)
})

app.get('/api/products/:productID/reviews/:reviewID', (req,res) =>{
    // console.log(req.params);
    res.send('hello world')
})

// Query String Parameters aka URL Parameters
app.get('/api/v1/query', (req,res)=>{
    // console.log(req.query)
    const {search,limit} = req.query
    // Spread operator (...products)
    let sortedProducts = [...products]

    if(search){
        sortedProducts = sortedProducts.filter((product)=>{
            return product.name.startsWith(search)
        })
    }
    if(limit){
        sortedProducts = sortedProducts.slice(0,Number(limit))
    }
    if(sortedProducts.length < 1){
        // Must add Return so that server only sends 1 response
        return res.status(200).json({success: true, data: []})
    }
    // This is a good practice to add return after every response
    return res.status(200).json(sortedProducts)
})


app.listen(5000, () =>{
    console.log('Server is listening on port 5000...');
})