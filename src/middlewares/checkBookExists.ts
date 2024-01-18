import { Request, Response, NextFunction } from 'express';
import { booksDatabase } from '../database/database';

export const checkBookExists = (req: Request, res: Response, next: NextFunction) => {
  const bookId = parseInt(req.params.id);
  const book = booksDatabase.find(book => book.id === bookId);
  if (!book) {
    return res.status(404).json({ error: 'Book not found.' });
  }
  next();
};