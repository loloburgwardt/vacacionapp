const controller = {
    index: function (req, res) {
        let estado = 'declinado'
        res.render('registroVacaciones',{estado:estado})
    }
}
module.exports = controller;