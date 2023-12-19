import { Request, Response } from 'express';
import * as bookService from '../services/bookService';

export const createBook = async (req: Request, res: Response) => {
  const book = bookService.createBook(req.body);
  res.status(201).json(book);
};

export const getBooks = async (req: Request, res: Response) => {
  const books = bookService.getBooks();
  res.status(200).json(books);
};

export const getBookById = async (req: Request, res: Response) => {
  const book = bookService.getBookById(parseInt(req.params.id));
  if (!book) {
    return res.status(404).json({ error: 'Book not found' });
  }
  res.status(200).json(book);
};

export const updateBook = async (req: Request, res: Response) => {
  const book = bookService.updateBook(parseInt(req.params.id), req.body);
  if (!book) {
    return res.status(404).json({ error: 'Book not found' });
  }
  res.status(200).json(book);
};

export const deleteBook = async (req: Request, res: Response) => {
  bookService.deleteBook(parseInt(req.params.id));
  res.status(204).send();
};
