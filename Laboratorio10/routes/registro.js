var express = require('express');
var router = express.Router();
var registroController=require('../controllers/registroControllers');

router.gat ('/',registroController.gatAll);
router.get('/:id',registroController.gatOneById);
router.post('/',registroController.insert);
router.delete('/:id',registroController.erase);
router.put('/',registroController.update);


model.exports = router;