const express = require('express');
const { HitMe } = require('../../controllers');
const router = express.Router();
router.get('/hitMe',HitMe)
module.exports = router;
