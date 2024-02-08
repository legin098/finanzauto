import {UserEntity} from '../models';

export interface IUsersRepository {
  createUser(user: UserEntity): Promise<void>;
  getListUser(limit: number, page: number): Promise<UserEntity[]>;
  getUserById(id: string): Promise<UserEntity>;
  updateUser(user: UserEntity): Promise<void>;
  deleteUser(id: string): Promise<void>;
}
