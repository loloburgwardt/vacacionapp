function authLoginMiddleware(req,res,next){
    if(req.session.user==undefined){
        res.send('Tenes que estar logueado')
    }else{
        next()
    }
}
module.exports = authLoginMiddleware;