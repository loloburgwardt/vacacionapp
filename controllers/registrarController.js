const fs = require('fs')
const controller = {
    index: function (req, res) {
        let user = req.session.user
        res.render('registroVacaciones',{user})
    },
    registrar: function (req, res){
        let user = req.session.user;
        let pedidos = user.pedidos;
        let pedido = {
            desde: req.body.desde,
            hasta: req.body.hasta,
            autorizante: req.body.autorizante,
            estado: "Pendiente"
        }
        user.pedidos.push(pedido)
        let users = fs.readFileSync(__dirname + '/../data/users.json','utf-8');
        users = JSON.parse(users);
        for(let i=0; i<users.length;i++){
            if(users[i].email==user.email){
                let posicionUser = i
                users.splice(posicionUser,1);
                break;
            }
        }
        users.push(user)
        users = JSON.stringify(users,null, ' ')
        fs.writeFileSync(__dirname + '/../data/users.json',users)
        res.redirect('/registrar')
    }
}
module.exports = controller;