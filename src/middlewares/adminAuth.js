const isAdmin = (req, res, next)=>{
    let admins = ['Ada', 'Greta', 'Vim', 'Tim']
    if(admins.includes(req.query.user)){
        next();
    }else{
        res.send('Unauthorized access')
    }
}

module.exports = isAdmin;