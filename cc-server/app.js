const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const history = require('connect-history-api-fallback');
const path = require('path');
const cors = require('cors');
const index = require('./routes/index');
const colors = require('./routes/colors');
const palettes = require('./routes/palettes');
const { errorHandler, notFound } = require('./middleware/errorHandler');

require('colors');
require('dotenv').config();

const app = express();

app.use(history());
app.use(morgan('dev'));
app.use(cors());

app.use(express.static(path.join(__dirname, '/client')));
app.use(express.static(path.join(__dirname, '/public')));
app.use(helmet());

app.use(express.json({ limit: '20mb' }));
app.use('/', index);
app.use('/colors', colors);
app.use('/palettes', palettes);

app.use(errorHandler);
app.use(notFound);
const PORT = process.env.PORT ?? 5000;

console.log(`Server listens on port: ${PORT}`.blue.bold);
app.listen(PORT);
