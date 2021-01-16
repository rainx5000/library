const booksContainer = document.querySelector('#allBooks');
const booksLocation = document.querySelector('#mainContent')
const addBook = document.querySelector('#addBook');
const formToggle = document.querySelector('.formBackground');
const form = document.querySelector('#form');
const formBtn = document.querySelector('#formSubmit');
const myLibrary = [];


// form inputs
const read = document.querySelector('#read')
const author = document.querySelector('#author')
const title = document.querySelector('#title')
const pages = document.querySelector('#pagesNum')
//form inputs

addBook.addEventListener('click', (e) => {//opens new book form
    formToggle.classList.toggle('display')
})

formBtn.addEventListener('click', (e) => {//submits form
    if (pages.value > 0 && author.value.length > 0 && title.value.length > 0) {//must enter fields to submit
    formToggle.classList.toggle('display');
    }
})

formToggle.addEventListener('mousedown', (e) => {//closes form if click outside of form//does not reset it
    if (e.target.className === 'formBackground') {
    formToggle.classList.toggle('display');
    }
})

form.addEventListener('submit', (e) => {
    e.preventDefault(e);

    let book = new Book(title.value, author.value, pages.value, read.checked);
    addBookToLibrary(book);

    title.value = '';//resets value after new book gets added
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

function addBookToLibrary(book) {
    myLibrary.push(book)

        let newBook = document.createElement('div');
        booksLocation.append(newBook);
        newBook.classList.add('newBook', `${read.checked? 'readColor': 'unreadColor'}`);
        let bookTitle = document.createElement('h2');
        bookTitle.textContent = `"${title.value}"`;
        let bookAuthor = document.createElement('h2');
        bookAuthor.textContent = author.value;
        let bookPages = document.createElement('h2');
        bookPages.textContent = `${pages.value} pages`;
        let bookRead = document.createElement('button');
        bookRead.textContent = `${read.checked ? 'Read' : 'Unread'}`
        
        let removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        newBook.append(bookTitle, bookAuthor, bookPages, bookRead, removeBtn);
        bookTitle.classList.add('title');
        bookAuthor.classList.add('author');
        bookPages.classList.add('pages');
        bookRead.classList.add('readBtn');
        removeBtn.classList.add('removeBtn');

        removeBtn.addEventListener('click', (e) => {
           for (let j = 0; j < myLibrary.length; j++) {
            if (`"${myLibrary[j].title}"` === removeBtn.parentElement.firstElementChild.textContent) {
                myLibrary.splice(j, 1)
                removeBtn.parentElement.remove();
            }
           }
        })

        if (bookRead.textContent === 'Unread') {
            bookRead.classList.add('unreadBtnColor');

        } else {
            bookRead.classList.add('readBtnColor');
        }
        bookRead.addEventListener('click', (e) => {
            newBook.classList.toggle('unreadColor')
            newBook.classList.toggle('readColor')
            bookRead.textContent = `${newBook.classList.contains('readColor') ? 'Read' : 'Unread'}`
            if (bookRead.textContent === 'Unread') {
                bookRead.classList.add('unreadBtnColor');
                bookRead.classList.remove('readBtnColor');
            } else {
                bookRead.classList.add('readBtnColor');
                bookRead.classList.remove('unreadBtnColor');
            }
        })
}


    


