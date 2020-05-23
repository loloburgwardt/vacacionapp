const bcryptjs = require('bcryptjs')
const fs = require('fs');
const controller = {
    index: function (req, res) {
        res.render('crearUsuario')
    },
    create: function(req,res){
        let users = fs.readFileSync(__dirname + '/../data/users.json', 'utf-8');
        users = JSON.parse(users);
        let user = {
            email: req.body.email,
            password: bcryptjs.hashSync(req.body.password,10),
            pedidos: []
        }
        users = [...users, user]
        users = JSON.stringify(users, null, ' ');
        fs.writeFileSync( __dirname + '/../data/users.json',users)
        res.redirect('/')
    }
}
module.exports = controller;