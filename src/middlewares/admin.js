module.exports = [
    function(req, res, next) {

        let nombre = req.query.name

        switch (nombre) {
            case "Jesi":
            case "Gise":
            case "Anto":
            case "Branco":
                res.send("Bienvenido admin " + nombre)
                break;
            default:
                res.send("no tenes los privilegios para ingresar")
                break;
        }
        next()
    }
]