import cors from 'cors';
import 'dotenv/config';
import { drizzle } from 'drizzle-orm/connect';
import express, { Application } from 'express';
import middlewares from './middlewares';
import routes from './routes';

const bootstrap = async (): Promise<void> => {
  const app: Application = express();
  const port: number = 3000;

  // Database
  const db = await drizzle('node-postgres', process.env.DATABASE_URL!);
  console.log('Database connected: ', db);

  // Cors
  app.use(cors());

  // Health check
  app.get('/api/health', (req, res) => {
    res.status(200).json({ message: 'Server is running' });
  });

  // App routes
  routes(app);

  // Error handling
  app.use(middlewares.errorHandler());

  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
};

bootstrap();
