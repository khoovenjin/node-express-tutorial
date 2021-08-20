// This not to authorize users, this is an example
const authorize = (req,res,next) =>{
    const {user} = req.query
    // In reality, we check for JSON web token then communicate with database and fetch the info
    if(user==='john'){
        req.user = {name:'john', id:3}
        next()
    }
    else{
        // 401 for unauthorized users
        res.status(401).send('Unauthorized')
    }
}

module.exports = authorize