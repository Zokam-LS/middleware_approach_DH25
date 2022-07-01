
const adminController = {
    access: (req, res)=>{
        //res.send('Welcome Admin: '+ req.query.user)
        res.render('admin', {user : req.query.user});
    }
};

module.exports = adminController;