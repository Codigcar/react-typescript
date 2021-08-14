
const { validationResult } = require('express-validator');

const validarCamposLanzandoElErrorMiddleware = (req, res = response, next) => {

    // manejo de errores
    // manejor de los errores validados x los middlewares en el 'auth.js'
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        });
    }

    next();
}

module.exports = {
    validarCamposLanzandoElErrorMiddleware
}