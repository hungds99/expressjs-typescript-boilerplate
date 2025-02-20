import 'dotenv/config';
import { z } from 'zod';

const envSchema = z.object({
  NODE_ENV: z
    .enum(['development', 'production', 'test'])
    .default('development'),
  PORT: z.string().default('3000').transform(Number),
  DATABASE_URL: z.string().url(),
  JWT_SECRET: z.string().min(1),
  JWT_EXPIRES_IN: z.string().default('7d'),
});

const validateEnv = () => {
  try {
    const env = envSchema.parse(process.env);
    return env;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      throw new Error(
        `❌ Invalid environment variables: ${JSON.stringify(error.errors, null, 2)}`
      );
    }
    throw error;
  }
};

export const env = validateEnv();
