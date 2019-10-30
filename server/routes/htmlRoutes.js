const router = require('express').Router()
const path = require('path')
// Prefixes With api in front eg /api/tables
// router.get('/home.html');
// router.get('/reserve.html');
router.get('/tables',(req, res) => {
  res.sendFile(path.join(__dirname, '..','..','client', 'tables.html' ))
});

module.exports = router