'use strict';

const cors = require("cors");
const bodyParser = require("body-parser");

const express = require('serverless-express/express');
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.send('This is a sample GET function');
});

app.get('/status', function (req, res) {
    res.send('Retrieve the file status statistics');
});

app.get('/sla', function (req, res) {
    res.send('Retrieve the SLA statistics');
});

app.post('/reprocess', function (req, res) {
    const { fileName, type } = req.body;
    res.json({fileName, type});
});

module.exports = app;

