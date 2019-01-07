var express = require('express');
var router = express.Router();
import {SportGoalController, SportHistoryController} from '../handlers/sport'


router.post('/', SportGoalController.createSportGoal);

router.post('/:id/histories', SportHistoryController.createSportRecord);

module.exports = router;
