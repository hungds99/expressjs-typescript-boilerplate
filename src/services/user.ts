import db from '../db';
import { usersTable } from '../db/schema/users';

// Create a new user
export const create = async (data: string) => {
  await db
    .insert(usersTable)
    .values({
      name: 'John',
      age: 30,
      email: 'john@example.com',
    })
    .execute();

  return data;
};
