var express = require('express');
var router = express.Router();
import {UserController} from '../handlers/user'
/* GET users listing. */
router.get('/', UserController.getUsers);

module.exports = router;
