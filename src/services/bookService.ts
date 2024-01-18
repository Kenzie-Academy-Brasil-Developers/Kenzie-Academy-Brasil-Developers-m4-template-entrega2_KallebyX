import { Book, booksDatabase } from '../database/database';

export const createBook = (bookData: Omit<Book, 'id' | 'createdAt' | 'updatedAt'>): Book => {
  const newBook: Book = {
    id: booksDatabase.length + 1, // Ensure this generates a unique ID
    ...bookData,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  booksDatabase.push(newBook);
  return newBook;
};

export const getBooks = (searchTerm?: string): Book[] => {
  if (searchTerm) {
    return booksDatabase.filter(book =>
      book.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
  return booksDatabase;
};

export const getBookById = (id: number): Book | undefined => {
  return booksDatabase.find(book => book.id === id);
};

export const updateBook = (id: number, bookData: Partial<Book>): Book | undefined => {
  const bookIndex = booksDatabase.findIndex(book => book.id === id);
  if (bookIndex === -1) {
    return undefined;
  }

  const updatedBook = {
    ...booksDatabase[bookIndex],
    ...bookData,
    updatedAt: new Date(),
  };

  booksDatabase[bookIndex] = updatedBook;
  return updatedBook;
};

export const deleteBook = (id: number): void => {
  const bookIndex = booksDatabase.findIndex(book => book.id === id);
  if (bookIndex !== -1) {
    booksDatabase.splice(bookIndex, 1);
  }
};
