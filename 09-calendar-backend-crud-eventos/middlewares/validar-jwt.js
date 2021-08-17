
require('dotenv').config();
const jwt = require('jsonwebtoken');

const validatJWT = (req, res, next) => {

    // x-token headers
    const token = req.header('x-token');
    console.log('token: ',token);


    if (!token){
        return res.status(401).json({
            ok: false,
            msg: 'No hay token en la peticion'
        })
    }

    console.log('Palabra secreta en .env: ', process.env.SECRET_JWT_SEED);

    try {
        // validaciones del token 
        const payload = jwt.verify(token, process.env.SECRET_JWT_SEED)
        console.log('payload JWT: ', payload);

        req.uid = payload.uid;
        req.name = payload.name;

    } catch (error) {
        console.log('Token no valido: ', error);
        return res.status(401).json({
            ok: false,
            mnsg: 'Token no valido'
        })
    }

    next();
}

module.exports = {
    validatJWT
}