// require('dotenv').config();

const express = require("express");
const app = express();

const cors = require("cors");

// const {SERVER_PORT} = process.env;

app.use(express.json());
app.use(cors());


//pull module exports
const {getQuickRead} = require('./controller.js');
const {getGotTime} = require('./controller.js');

const {getBooks} = require('./controller.js');
const {addBook} = require('./controller.js');

//connect fuctions to endpoints
app.get('/api/quick-read', getQuickRead);
app.get('/api/got-time', getGotTime);

app.get("/api/books", getBooks);
app.post("/api/books", addBook);

// app.listen(SERVER_PORT, () => console.log(`up on ${SERVER_PORT}`));

app.listen(6006, () => console.log("Server running on 6006"))