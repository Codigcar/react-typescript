const {Router} = require('express');
const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require('../controllers/events_controller');
const router = Router();

// middleware
const { validatJWT } = require('../middlewares/validar-jwt');

// Todos tienen que pasar por la validacion del JWT, esta las protege a todas las deams rutas de abajo que deben tener JWT en el header con 'x-token'
router.use(validatJWT);

// Obtener eventos
router.get('/', getEventos);

// Crear un nuevo evento
router.post('/', crearEvento);

// Actualizar evento
router.put('/:id', actualizarEvento);

// Borrar evento
router.delete('/:id', eliminarEvento);

module.exports= router;