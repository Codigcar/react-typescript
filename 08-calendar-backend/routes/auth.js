
const {Router} = require('express');
const router = Router();

/* app */router.get("/", (req, res) => {
  console.log("se requiere /");
  res.json({
      ok:true
  })
});

module.exports = router;

// http://localhost:4000/api/auth

