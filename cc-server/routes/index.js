const express = require('express');
const webpush = require('web-push');
require('dotenv').config();

const router = express.Router();

const publicVapidKey = process.env.PUBLIC_VAPID_KEY;
const privateVapidKey = process.env.PRIVATE_VAPID_KEY;

const subscriptions = [];

webpush.setVapidDetails(
  'mailto:sun.s02@htlwienwest.at',
  publicVapidKey,
  privateVapidKey
);

router.post('/subscribe', (req, res) => {
  subscriptions.push(req.body);
  res.status(201).end();
});

router.post('/notify', (req) => {
  const payload = JSON.stringify({ title: 'Color Capture', body: req.body });
  for (const sub of subscriptions) {
    try {
      webpush.sendNotification(sub, payload);
    } catch (error) {
      console.error(error);
    }
  }
});

module.exports = router;
