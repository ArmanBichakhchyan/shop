const router = require('express').Router();

router.use('/auth', require('./auth'));
router.use('/analytics', require('./analytics'));
router.use('/category', require('./category'));
router.use('/order', require('./order'));
router.use('/position', require('./position'));


module.exports = router