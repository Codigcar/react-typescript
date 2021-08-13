
const {Router} = require('express');
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
router.post('/new', crearUsuario);

// router.post('/', (req,res) => {
//   res.json({
//     ok:true,
//     msg: 'login'
//   })
// })
router.post('/', loginUsuario)

// router.get('/renew', (req,res) => {
//   res.json({
//     ok:true,
//     msg: 'renew'
//   })
// })
router.get('/renew', revalidarToken)




module.exports = router;

// http://localhost:4000/api/auth

