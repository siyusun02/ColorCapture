const { v4: uuidv4 } = require('uuid');
const asyncHandler = require('express-async-handler');
const fs = require('fs');
const path = require('path');
const colors = require('../model/colors.js');

module.exports = {
  getColors: asyncHandler(async (req, res) => {
    res.status(200).json(await colors.getColors());
  }),
  // addColor: asyncHandler(async (req, res) => {
  //   console.log(req.file);
  //   res.status(200).end();
  // }),
  addColor: asyncHandler(async (req, res) => {
    // console.log(req.body);
    const base64 = req.body.image.replace(/^data:image\/png;base64,/, '');
    const binaryData = Buffer.from(base64, 'base64').toString('binary');
    const imgname = `${uuidv4()}.png`;
    const dir = path.join(__dirname, '../client/images/');
    if (!fs.existsSync(dir)){
      fs.mkdirSync(dir);
    }

    const imgpath = path.join(dir, imgname);

    fs.writeFileSync(imgpath, binaryData, 'binary');
    const row = await colors.addColor({
      ...req.body,
      imgname,
    });
    res.status(200).json(row);
  }),
  delColor: asyncHandler(async (req, res) => {
    const row = await colors.delColor(req.params.id);
    if (row) {
      const imgpath = path.join(__dirname, `../client/images/${row.imgname}`);
      fs.unlinkSync(imgpath);
      res.status(200).end();
    } else res.status(404).send('ID not found');
  }),
  editColor: asyncHandler(async (req, res) => {
    const row = await colors.editColor(req.params.id, req.body);
    if (row) res.status(200).json(row);
    else res.status(404).send('ID not found');
  }),
};
