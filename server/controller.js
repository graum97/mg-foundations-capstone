const books = require('./db.json');
let globalID = 31;
// require("dotenv").config();

// const Sequelize = require('sequelize');

const {CONNECTION_STRING} = process.env;

// const sequelize = new Sequelize(CONNECTION_STRING, {
//     dialect: 'postgress',
//     dialectOptions: {
//         ssl: {
//             rejectUnauthorized: false
//         }
//     }
// });

module.exports = {
    getQuickRead: (req, res) => {
        const quickTimes = ["10 minutes", "15 minutes", "20 minutes", "25 minutes", "30 minutes", "35 minutes", "40 minutes", "45 minutes", "50 minutes", "55 minutes", "1 hour"];

        let randomIndex = Math.floor(Math.random() * quickTimes.length);
        let randomQuickTime = quickTimes[randomIndex];

        res.status(200).send(`Read for ${randomQuickTime}`);
    },
    getGotTime: (req, res) => {
        const longTimes = ["1 hour", "1 hour & 5 minutes", "1 hour & 10 minutes", "1 hour & 15 minutes", "1 hour & 20 minutes", "1 hour & 25 minutes", "1 hour & 30 minutes", "1 hour & 35 minutes", "1 hour & 40 minutes", "1 hour & 45 minutes", "1 hour & 50 minutes", "1 hour & 55 minutes", "2 hours"];

        let randomIndex = Math.floor(Math.random() * longTimes.length);
        let randomLongTime = longTimes[randomIndex];

        res.status(200).send(`Read for ${randomLongTime}`);
    },
    addBook: (req, res) => {
        let {title, author, genre, obtain, read} = req.body;
        const newBook = {
            id: globalID,
            title,
            author,
            genre,
            obtain,
            read
        };
        books.push(newBook);
        res.status(200).send(books);
        globalID++;
    },
    getBooks: (req, res) => {
        res.status(200).send(books);
    }
}