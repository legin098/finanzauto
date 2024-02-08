import {UserEntity} from '../models';
import {IUsersRepository} from '../repositories';

export class UsersUseCase {
  constructor(readonly repository: IUsersRepository) {}

  createUser = async (user: UserEntity): Promise<void> =>
    await this.repository.createUser(user);

  getUserById = async (id: string): Promise<UserEntity> =>
    await this.repository.getUserById(id);

  getListUser = async (limit: number, page: number): Promise<UserEntity[]> =>
    await this.repository.getListUser(limit, page);

  updateUser = async (user: UserEntity): Promise<void> =>
    await this.repository.updateUser(user);

  deleteUser = async (id: string): Promise<void> =>
    await this.repository.deleteUser(id);
}
