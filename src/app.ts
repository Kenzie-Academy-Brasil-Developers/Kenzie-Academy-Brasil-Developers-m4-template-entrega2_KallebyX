import express from 'express';
import bookRoutes from './routes/bookRoutes';
import { errorMiddleware } from './middlewares/errorMiddleware';

export const app = express();

app.use(express.json());
app.use('/books', bookRoutes);
app.use(errorMiddleware);
