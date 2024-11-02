const express = require('express');
const colors = require('../controllers/colors');

const router = express.Router();

router.get('/', colors.getColors);
router.post('/', colors.addColor);
router.patch('/:id', colors.editColor);
router.delete('/:id', colors.delColor);

module.exports = router;
