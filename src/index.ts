import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import routes from './routes';

const port: number = 3000;
const app = express();

const bootstrap = async (): Promise<void> => {
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  // API routes
  routes(app);

  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
};

bootstrap();
