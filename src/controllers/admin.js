const admins = ['Ada', 'Greta', 'Vim', 'Tim'];
const adminController = {
    access: (req, res)=>{
        res.render('admin', {admins});
    }
};

module.exports = adminController;