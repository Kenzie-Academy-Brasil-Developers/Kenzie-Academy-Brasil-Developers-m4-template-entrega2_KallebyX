import express from 'express';
import * as bookController from '../controllers/bookController';
import { checkDuplicateBookName } from '../middlewares/checkDuplicateBookName';
import { checkBookExists } from '../middlewares/checkBookExists';
import { validate } from '../middlewares/validationMiddleware';
import { createBookSchema, updateBookSchema } from '../validation/validation';

const router = express.Router();

router.post('/', validate(createBookSchema), checkDuplicateBookName, bookController.createBook);
router.get('/', bookController.getBooks);
router.get('/:id', checkBookExists, bookController.getBookById);
router.patch('/:id', validate(updateBookSchema), checkBookExists, checkDuplicateBookName, bookController.updateBook);
router.delete('/:id', checkBookExists, bookController.deleteBook);

export default router;