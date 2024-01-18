import express from 'express';
import helmet from 'helmet';
import 'express-async-errors';
import bookRoutes from './routes/bookRoutes';
import { errorMiddleware } from './middlewares/errorMiddleware';

export const app = express();

app.use(helmet());
app.use(express.json());
app.use('/books', bookRoutes);
app.use(errorMiddleware);