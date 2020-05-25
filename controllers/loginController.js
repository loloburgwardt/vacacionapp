const fs =require('fs')
const bcryptjs = require('bcryptjs');
const controller = {
    login: function(req, res){
        let users = fs.readFileSync(__dirname + '/../data/users.json', 'utf-8');
        users = JSON.parse(users);
        let user = users.find(function (value) {
            return req.body.email == value.email
        })
        if(bcryptjs.compareSync(req.body.password, user.password)){
            req.session.user = user;
            res.redirect('/registrar')
        }else{
            res.redirect('/')
        }
    }
}
module.exports = controller;