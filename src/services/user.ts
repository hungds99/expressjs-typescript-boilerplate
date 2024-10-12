import { userRepository } from '../repositories';

// Create a new user
export const create = async (data: string) => {
  await userRepository.getUserById();
  return data;
};
