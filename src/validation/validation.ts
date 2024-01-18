import { z } from 'zod';
import { Request, Response, NextFunction } from 'express';

export const createBookSchema = z.object({
  name: z.string().min(3),
  pages: z.number().min(1),
  category: z.string().optional(),
});

export const updateBookSchema = z.object({
  name: z.string().min(3).optional(),
  pages: z.number().min(1).optional(),
  category: z.string().optional(),
});

export const validate = (schema: z.ZodSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      next();
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json(error.errors);
      }
      console.error(error);
      res.status(500).json({ message: 'An unexpected error occurred' });
    }
  };
};