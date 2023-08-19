/**
 * users
 */
const express = require('express');
const router = express.Router();
const service = require('../services/user');

// 首页接口
router.get('/user', service.getUsers);

module.exports = router;