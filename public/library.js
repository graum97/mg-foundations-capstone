
//grab add book form
const newBookForm = document.querySelector("form")
//grab to-read contatiner
const toReadList = document.querySelector('#to-read-container');
//grab read container
const readList = document.querySelector('#read-container');
//establish baseURL
const baseURL = `http://localhost:6006/api/library`

//axios functions
const bookCallback = ({data: books}) => displayBooks(books);
const errCallback = err => console.log(err);

const getBooks = () => axios.get(baseURL).then(bookCallback).catch(errCallback);
const addBook = body => axios.post(baseURL, body).then(bookCallback).catch(errCallback);

function addBookButton(event) {
    event.preventDefault();

    let titleInput = document.querySelector('input[name="title"]');
    let authorInput = document.querySelector('input[name="author"]');
    let genreSelection = document.querySelector('option[value]');
    let obtainSelection = document.querySelector('input[name="obtain"]:checked');
    let readSelection = document.querySelector('input[name="read"]:checked');

    let bookObject = {
        title: titleInput.value,
        author: authorInput.value,
        genre: genreSelection.value,
        obtain: obtainSelection.value,
        read: readSelection.value
    }

    addBook(bookObject)

    titleInput.value = ''
    authorInput = ''
    genreSelection = ''
    obtainSelection = ''
    readSelection = Boolean
}

function createBookCard(book) {
    const bookCard = document.createElement('div')
    bookCard.classList.add('book-card')

    bookCard.innerHTML = `<p class="book">${book.title} by ${book.author}</p>
    <p class="genre">${book.genre}</p>
    <p class="obtain">${book.obtain}</p>
    <input type="checkbox" value="Read?" onclick="javascript:if(document.getElementById('read').checked) readList.appendChild(bookCard); else toReadList.appendChild(bookCard);"</input>`
    // if (book.read === true) {
        // readList.appendChild(bookCard)
    // } else {
    //     toReadList.appendChild(bookCard)
    // };
};

function displayBooks(arr) {
    // toReadList.innerHTML = ``
    // for (let i = 0; i < arr.length; i++) {
    //     createBookCard(arr[i])
    // }
    readList.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createBookCard(arr[i])
    }
};

newBookForm.addEventListener('submit', addBookButton)

getBooks()