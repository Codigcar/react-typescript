const {Router} = require('express');
const { check } = require('express-validator');
const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require('../controllers/events_controller');
const { isDate } = require('../helper/isDate');
const { validarCamposLanzandoElErrorMiddleware } = require('../middlewares/validar-campos');
const router = Router();

// middleware
const { validatJWT } = require('../middlewares/validar-jwt');

// Todos tienen que pasar por la validacion del JWT, esta las protege a todas las deams rutas de abajo que deben tener JWT en el header con 'x-token'
router.use(validatJWT);

// Obtener eventos
router.get('/', getEventos);

// Crear un nuevo evento
router.post('/', [
    check('title', 'El titulo es obligatorio').not().isEmpty(),
    check('start','Fecha de inicio es obligatorio').custom(isDate),
    validarCamposLanzandoElErrorMiddleware
], crearEvento);

// Actualizar evento
router.put('/:id', actualizarEvento);

// Borrar evento
router.delete('/:id', eliminarEvento);

module.exports= router;