import React from 'react';

const BookForm = ({ newBook, setNewBook, addBook }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        if (newBook.trim() !== '') {
            addBook(newBook);
            setNewBook('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={newBook}
                onChange={(e) => setNewBook(e.target.value)}
                placeholder="Введите название книги"
            />
            <button type="submit">Добавить книгу</button>
        </form>
    );
};

export default BookForm;
