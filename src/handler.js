'use strict';

const handler = require('serverless-express/handler')
const app = require('./index');

exports.api = handler(app);