const bcryptjs = require('bcryptjs');
const controller = {
    login: function(req, res){
        if(bcryptjs.compareSync(req.body.password, req.user.password)){
            req.session.user = req.user
            res.redirect('/registrar')
        }else{
            res.redirect('/')
        }
    }
}
module.exports = controller;