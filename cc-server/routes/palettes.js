const express = require('express');
const palettes = require('../controllers/palettes');

const router = express.Router();

router.get('/', palettes.getPalettes);
router.post('/', palettes.addPalette);
// router.patch('/:id', palettes.editPalette);
// router.delete('/:id', palettes.delPalette);

module.exports = router;
