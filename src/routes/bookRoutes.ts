import express from 'express';
import * as bookController from '../controllers/bookController';
import { checkDuplicateBookName } from '../middlewares/checkDuplicateBookName';
import { checkBookExists } from '../middlewares/checkBookExists';

const router = express.Router();

router.post('/', checkDuplicateBookName, bookController.createBook);
router.get('/', bookController.getBooks);
router.get('/:id', checkBookExists, bookController.getBookById);
router.patch('/:id', checkBookExists, checkDuplicateBookName, bookController.updateBook);
router.delete('/:id', checkBookExists, bookController.deleteBook);

export default router;