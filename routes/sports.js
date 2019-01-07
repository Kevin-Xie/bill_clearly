var express = require('express');
var router = express.Router();
import {SportTaskController} from '../handlers/sportTask'


router.post('/', SportTaskController.createSportTask);

module.exports = router;
