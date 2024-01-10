var express = require('express');
var router = express.Router();
var LogController = require('../controllers/LogController');

router.get('/', LogController.getAllLogs);
router.post('/log/add-new', LogController.addLog);
router.get('/log/:id', LogController.getLogById);

module.exports = router;
