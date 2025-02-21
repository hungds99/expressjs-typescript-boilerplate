import cors from 'cors';
import express from 'express';
import routes from './routes';
import { env } from './utils';

const port: number = env.PORT;
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
