const express = require("express");
const app = express();

const cors = require("cors");

app.use(express.json());
app.use(cors());


const {getQuickRead} = require('./controller');
const {getGotTime} = require('./controller');

const {getLiterature} = require('./controller');
const {getFiction} = require('./controller');
const {getNonfiction} = require('./controller');

const {getBooks} = require('./controller');
const {addBook, moveBook} = require('./controller');

app.get('/api/quick-read', getQuickRead);
app.get('/api/got-time', getGotTime);

app.get("/api/literature", getLiterature);
app.get("/api/fiction", getFiction);
app.get("/api/nonfiction", getNonfiction);

app.get("/api/library", getBooks);
app.post("/api/library", addBook);
app.put("/api/library/", moveBook);

app.listen(6006, () => console.log("Server running on 6006"))