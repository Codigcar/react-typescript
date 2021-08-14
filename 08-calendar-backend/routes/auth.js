
const {Router} = require('express');
// npm i express-validator
const {check} = require('express-validator');
const router = Router();

const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth_controller');


/* app */router.get("/", (req, res) => {
  console.log("se requiere /");
  res.json({
      ok:true
  })
});

// router.post('/new', (req,res) => {
//   res.json({
//     ok:true,
//     msg: 'registro'
//   })
// })
router.post('/new',[
  check('name','El nombre es obligatorio').not().isEmpty(),
  check('email','El email es obligatorio').isEmail(),
  check('password','El password debe ser de minimo 4 caracteres').isLength({min:4}),
], crearUsuario);

// router.post('/', (req,res) => {
//   res.json({
//     ok:true,
//     msg: 'login'
//   })
// })
router.post('/',[
  check('email','El email es obligatorio').isEmail(),
  check('password','El password debe ser de minimo 4 caracteres').isLength({min:4}),
], loginUsuario)

// router.get('/renew', (req,res) => {
//   res.json({
//     ok:true,
//     msg: 'renew'
//   })
// })
router.get('/renew', revalidarToken)




module.exports = router;

// http://localhost:4000/api/auth

