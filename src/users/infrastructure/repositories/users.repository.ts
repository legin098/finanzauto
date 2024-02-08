import {API_KEY, API_URL} from '@env';
import {IHttp} from '@src/common/domain/repositories';
import {UserEntity} from '@src/users/domain/models';
import {IUsersRepository} from '@src/users/domain/repositories';
import {UserAdapter} from '../adapters';
import {ListUserDto, UserDto} from '../models';

export class UsersRepositoryImpl implements IUsersRepository {
  constructor(readonly http: IHttp) {}

  createUser = async (user: UserEntity): Promise<void> => {
    try {
      const body = UserAdapter.userToDto(user);
      await this.http.request<void>({
        method: 'post',
        headers: {
          'app-id': API_KEY,
        },
        body,
        url: `${API_URL}/user/create`,
      });
    } catch (error) {
      throw new Error('[Service] Error create user');
    }
  };

  getListUser = async (limit: number, page: number): Promise<UserEntity[]> => {
    try {
      const response = await this.http.request<ListUserDto>({
        method: 'get',
        headers: {
          'app-id': API_KEY,
        },
        params: {
          limit,
          page,
        },
        url: `${API_URL}/user`,
      });

      return UserAdapter.usersDtotoEntity(response.data);
    } catch (error) {
      throw new Error('[Service] Error get list user');
    }
  };

  getUserById = async (id: string): Promise<UserEntity> => {
    try {
      const response = await this.http.request<UserDto>({
        method: 'get',
        headers: {
          'app-id': API_KEY,
        },
        url: `${API_URL}/user/${id}`,
      });

      return UserAdapter.userDtotoEntity(response);
    } catch (error) {
      throw new Error('[Service] Error get user by id');
    }
  };

  updateUser = async (user: UserEntity): Promise<void> => {
    try {
      await this.http.request<any>({
        method: 'put',
        headers: {
          'app-id': API_KEY,
        },
        body: {},
        url: `${API_URL}/user`,
      });
    } catch (error) {
      throw new Error('[Serivice] Error update user');
    }
  };

  deleteUser = async (id: string): Promise<void> => {
    try {
      await this.http.request<void>({
        method: 'delete',
        headers: {
          'app-id': API_KEY,
        },
        url: `${API_URL}/user/${id}`,
      });
    } catch (error) {
      throw new Error('[Serivice] Error get list user');
    }
  };
}
