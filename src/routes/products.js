const express = require('express');
const router = express.Router();
const { getAll, getById, create, update, remove } = require('../controllers/productController');
const { validateCreate, validateUpdate } = require('../middlewares/validateProduct');

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', validateCreate, create);
router.put('/:id', validateUpdate, update);
router.delete('/:id', remove);

module.exports = router;