// src/controllers/bookController.ts

import { Request, Response } from 'express';
import * as bookService from '../services/bookService';

export const createBook = async (req: Request, res: Response) => {
  try {
    const book = bookService.createBook(req.body);
    res.status(201).json(book);
  } catch (error) {
    res.status(400).json({ error: 'Error creating the book' });
  }
};

export const getBooks = async (req: Request, res: Response) => {
  try {
    const books = bookService.getBooks();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching books' });
  }
};

export const getBookById = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const book = bookService.getBookById(id);
    if (book) {
      res.status(200).json(book);
    } else {
      res.status(404).json({ error: 'Book not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error fetching the book' });
  }
};

export const updateBook = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const book = bookService.updateBook(id, req.body);
    if (book) {
      res.status(200).json(book);
    } else {
      res.status(404).json({ error: 'Book not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error updating the book' });
  }
};

export const deleteBook = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    bookService.deleteBook(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Error deleting the book' });
  }
};
