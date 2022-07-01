const isAdmin = (req, res, next)=>{
    let admins = ['Ada', 'Greta', 'Vim', 'Tim']
    if(admins.includes(req.params.user)){
        next();
    }else{
        res.send('Unauthorized access')
    }
}

module.exports = isAdmin;