const router = require('express').Router();
const {
  createSalesController,
  getAllSalesController,
  getSaleByIdController,
} = require('../controllers/sales');

router.get('/', getAllSalesController);
router.get('/:id', getSaleByIdController);
router.post('/', createSalesController);

module.exports = router;