import React, { useState, useEffect } from 'react';
import BookForm from './BookForm';

const BookList = () => {
    const [books, setBooks] = useState([]);
    const [newBook, setNewBook] = useState('');


    useEffect(() => {
        const storedBooks = JSON.parse(localStorage.getItem('books'));
        if (storedBooks) {
            setBooks(storedBooks);
        }
    }, []);


    useEffect(() => {
        localStorage.setItem('books', JSON.stringify(books));
    }, [books]);


    const addBook = (title) => {
        const newBooks = [...books, { title, read: false }];
        setBooks(newBooks);
    };


    const deleteBook = (index) => {
        const updatedBooks = books.filter((_, i) => i !== index);
        setBooks(updatedBooks);
    };


    const toggleRead = (index) => {
        const updatedBooks = books.map((book, i) =>
            i === index ? { ...book, read: !book.read } : book
        );
        setBooks(updatedBooks);
    };


    const sortBooks = () => {
        const sortedBooks = [...books].sort((a, b) => a.title.localeCompare(b.title));
        setBooks(sortedBooks);
    };

    return (
        <div>
            <h1>Список книг</h1>
            <BookForm newBook={newBook} setNewBook={setNewBook} addBook={addBook} />
            <button onClick={sortBooks}>Сортировать по алфавиту</button>
            <ul>
                {books.map((book, index) => (
                    <li key={index} style={{ textDecoration: book.read ? 'line-through' : 'none' }}>
                        {book.title}
                        <button onClick={() => toggleRead(index)}>{book.read ? 'Непрочитано' : 'Прочитано'}</button>
                        <button onClick={() => deleteBook(index)}>Удалить</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BookList;
