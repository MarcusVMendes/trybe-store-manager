const router = require('express').Router();
const {
  createSalesController,
} = require('../controllers/sales');

router.post('/', createSalesController);

module.exports = router;