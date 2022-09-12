// require('dotenv').config();

const express = require("express");
const app = express();

const cors = require("cors");

// const {SERVER_PORT} = process.env;

app.use(express.json());
app.use(cors());


//pull module exports
const {getQuickRead} = require('./controller');
const {getGotTime} = require('./controller');

const {getBooks} = require('./controller');
const {addBook, moveBook} = require('./controller');
// const {moveBook} = require('./controller');

//connect fuctions to endpoints
app.get('/api/quick-read', getQuickRead);
app.get('/api/got-time', getGotTime);

app.get("/api/library", getBooks);
app.post("/api/library", addBook);
app.put("/api/library/", moveBook);

// app.listen(SERVER_PORT, () => console.log(`up on ${SERVER_PORT}`));

app.listen(6006, () => console.log("Server running on 6006"))