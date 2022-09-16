const books = require('./db.json');
let globalID = 31;

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

    getLiterature: (req, res) => {
        let literature = [];
        for (let i = 0; i < books.length; i++) {
            if (books[i].genre === "Literature" && books[i].read === false) {
                literature.push(books[i]);
            }
        }

        let randomIndex = Math.floor(Math.random() * literature.length);
        let randomLiterature = literature[randomIndex];

        res.status(200).send(`Read ${randomLiterature.title} by ${randomLiterature.author}`);
    },

    getFiction: (req, res) => {
        let fiction = [];
        for (let i = 0; i < books.length; i++) {
            if (books[i].genre === "Fiction" && books[i].read === false) {
                fiction.push(books[i]);
            }
        }

        let randomIndex = Math.floor(Math.random() * fiction.length);
        let randomFiction = fiction[randomIndex];

        res.status(200).send(`Read ${randomFiction.title} by ${randomFiction.author}`);
    },
    
    getNonfiction: (req, res) => {
        let nonfiction = [];
        for (let i = 0; i < books.length; i++) {
            if (books[i].genre === "Nonfiction" && books[i].read === false) {
                nonfiction.push(books[i]);
            }
        }

        let randomIndex = Math.floor(Math.random() * nonfiction.length);
        let randomNonfiction = nonfiction[randomIndex];

        res.status(200).send(`Read ${randomNonfiction.title} by ${randomNonfiction.author}`);
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
        console.log(newBook)
        books.push(newBook);
        console.log(books)
        res.status(200).send(books);
        globalID++;
    },

    getBooks: (req, res) => {
        console.log("back-end get books");
        res.status(200).send(books);
    },

    moveBook: (req, res) => {
        const {id, read} = req.body
     
        console.log(id, read);
    
        for (let i = 0; i < books.length; i++) {
            if (id === books[i].id) {
                books[i].read = read
                console.log(books[i])
                return res.sendStatus(200);
            }
        }

    }
}