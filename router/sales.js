const router = require('express').Router();
const {
  createSalesController,
  getAllSalesController,
  getSaleByIdController,
  updateSaleController,
  deleteSaleController,
} = require('../controllers/sales');

router.get('/', getAllSalesController);
router.get('/:id', getSaleByIdController);
router.post('/', createSalesController);
router.put('/:id', updateSaleController);
router.delete('/:id', deleteSaleController);

module.exports = router;