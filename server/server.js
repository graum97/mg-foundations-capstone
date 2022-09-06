require('dotenv').config()

const express = require("express");
const app = express();

const cors = require("cors");

const {SERVER_PORT} = process.env;

app.use(cors());
app.use(express.json());




app.listen(SERVER_PORT, () => console.log(`up on ${SERVER_PORT}`));