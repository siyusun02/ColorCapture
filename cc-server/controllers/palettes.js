const { v4: uuidv4 } = require('uuid');
const asyncHandler = require('express-async-handler');
const fs = require('fs');
const path = require('path');
const palettes = require('../model/palettes.js');

module.exports = {
  getPalettes: asyncHandler(async (req, res) => {
    res.status(200).json(await palettes.getPalettes());
  }),
  addPalette: asyncHandler(async (req, res) => {
    const base64 = req.body.image.replace(/^data:image\/png;base64,/, '');
    const binaryData = Buffer.from(base64, 'base64').toString('binary');
    const imgname = `${uuidv4()}.png`;
    const imgpath = path.join(__dirname, `../client/images/${imgname}`);
    fs.writeFileSync(imgpath, binaryData, 'binary');
    const id = await palettes.addPalette({
      ...req.body,
      imgname,
    });
    res.status(200).json({ id });
  }),
  delPalette: asyncHandler(async (req, res) => {
    const row = await palettes.delPalette(req.params.id);
    if (row) {
      const imgpath = path.join(__dirname, `../client/images/${row.imgname}`);
      fs.unlinkSync(imgpath);
      res.status(200).end();
    } else res.status(404).send('ID not found');
  }),
  editPalette: asyncHandler(async (req, res) => {
    const row = await palettes.editPalette(req.params.id, req.body);
    if (row) res.status(200).json(row);
    else res.status(404).send('ID not found');
  }),
};
