var express = require('express');
var router = express.Router();
const controller = require('../controllers/saludos')

router.get('/', controller.culiacan);
router.post('/:c1', controller.ciudad);
router.put('/', controller.nombre);



module.exports = router;
