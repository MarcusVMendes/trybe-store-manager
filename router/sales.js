const router = require('express').Router();
const {
  createSalesController,
  getAllSalesController,
  getSaleByIdController,
  updateSaleController,
} = require('../controllers/sales');

router.get('/', getAllSalesController);
router.get('/:id', getSaleByIdController);
router.post('/', createSalesController);
router.put('/:id', updateSaleController);

module.exports = router;