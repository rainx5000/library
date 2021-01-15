const booksContainer = document.querySelector('#allBooks');
const addBook = document.querySelector('#addBook');
const formToggle = document.querySelector('.formBackground');
const form = document.querySelector('#form');
const formBtn = document.querySelector('#formSubmit');

// form inputs
const read = document.querySelector('#read')
const author = document.querySelector('#author')
const title = document.querySelector('#title')
const pages = document.querySelector('#pagesNum')
//form inputs

// document.body.addEventListener('click', (e) => {
//     console.dir(e.target)
// })

addBook.addEventListener('click', (e) => {
    formToggle.classList.toggle('display')
})

formBtn.addEventListener('click', (e) => {
    formToggle.classList.toggle('display');
})

formToggle.addEventListener('click', (e) => {
    if (e.target.className === 'formBackground') {
    formToggle.classList.toggle('display');
    }
})



const myLibrary = [];
let count = 0;

form.addEventListener('submit', (e) => {
    e.preventDefault(e);

    let book = new Book(title.value, author.value, pages.value, read.checked);
    addBookToLibrary(book, count);

    


    title.value = '';
    author.value = '';
    pages.value = '';
    read.checked = '';

})

const Book = function(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}


function addBookToLibrary(book, num) {
    myLibrary.push(book)

    for (let i = num; i < myLibrary.length; i++) {

        let newBook = document.createElement('div');
        booksContainer.append(newBook);
        newBook.classList.add('newBook', `${read.value? `readColor`: 'UnreadColor'}`);
        let bookTitle = document.createElement('h2');
        bookTitle.textContent = title.value;
        let bookAuthor = document.createElement('h2');
        bookAuthor.textContent = author.value;
        let bookPages = document.createElement('h2');
        bookPages.textContent = `${pages.value} pages`;
        let bookRead = document.createElement('button');
        bookRead.textContent = `${read.checked ? 'Read' : 'Unread'}`
        
        let removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        newBook.append(bookTitle, bookAuthor, bookPages, bookRead, removeBtn);

        removeBtn.addEventListener('click', (e) => {
            removeBtn.parentElement.remove();
        })
        bookRead.addEventListener('click', (e) => {
            newBook.classList.toggle('unreadColor')
            newBook.classList.toggle('readColor')
            bookRead.textContent = `${newBook.classList.contains('readColor') ? 'Read' : 'Unread'}`
        })
        count++
    }
}




    


