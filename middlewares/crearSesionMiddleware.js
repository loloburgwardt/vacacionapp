const fs = require('fs')
function crearSesionMiddleware(req, res, next){
    let users = fs.readFileSync(__dirname + '/../data/users.json','utf-8');
    users = JSON.parse(users);
    let user = users.find(function(value){
        return req.body.email == value.email
    })
    if (user==undefined){
        let crearSesion = {
            id: true,
            email: req.body.email
        }
        res.render('index',{crearSesion})
    }else{
        req.user = user
        next()
    }
}
module.exports= crearSesionMiddleware;