require('dotenv').config();

const express = require("express");
const app = express();

const cors = require("cors");

const {SERVER_PORT} = process.env;

app.use(express.json());
app.use(cors());


//pull module exports
const {getQuickRead} = require('./controller.js');
const {getGotTime} = require('./controller.js');



//connect fuctions to endpoints
app.get('/quick-read', getQuickRead);
app.get('/got-time', getGotTime);

app.listen(SERVER_PORT, () => console.log(`up on ${SERVER_PORT}`));