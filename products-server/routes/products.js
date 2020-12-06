const express = require('express');
const router = express.Router();

const productsController = require('../controllers/productsController');

router.get("/:id", productsController.getProduct);
router.get("/", productsController.getProducts);

module.exports = router;

