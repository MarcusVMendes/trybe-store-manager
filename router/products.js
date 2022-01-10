const router = require('express').Router();
const { createProductController } = require('../controllers/products');

router.post('/', createProductController);

module.exports = router;