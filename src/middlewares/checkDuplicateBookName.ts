// middlewares/checkDuplicateBookName.ts
import { Request, Response, NextFunction } from 'express';
import { booksDatabase } from '../database/database';

export const checkDuplicateBookName = (req: Request, res: Response, next: NextFunction) => {
  const { name } = req.body;
  const bookId = req.params.id ? parseInt(req.params.id) : null;
  const existingBook = booksDatabase.find(book => book.name === name && book.id !== bookId);
  if (existingBook) {
    return res.status(409).json({ error: 'Book already registered.' });
  }
  next();
};
