import {API_KEY, API_URL} from '@env';
import {IHttp} from '@src/common/domain/repositories';
import {UserEntity} from '@src/users/domain/models';
import {IUsersRepository} from '@src/users/domain/repositories';

export class UsersRepositoryImpl implements IUsersRepository {
  constructor(readonly http: IHttp) {}

  createUser = async (user: UserEntity): Promise<void> => {
    try {
      //const body = ProductAdapter.ProductEntityToDto(product);

      await this.http.request<void>({
        method: 'post',
        headers: {
          'app-id': API_KEY,
        },
        body: {
          firstName: 'Jesus',
          lastName: 'Cruz',
          email: 'test@test.com',
        },
        url: `${API_URL}/user/create`,
      });
    } catch (error) {
      throw new Error('[Service] Error create user');
    }
  };

  getListUser = async (): Promise<UserEntity[]> => {
    try {
      const response = await this.http.request<any>({
        method: 'get',
        headers: {
          'app-id': API_KEY,
        },
        url: `${API_URL}/user`,
      });

      return [];
    } catch (error) {
      throw new Error('[Service] Error get list user');
    }
  };

  getUserById = async (id: string): Promise<UserEntity> => {
    try {
      const response = await this.http.request<UserEntity>({
        method: 'get',
        headers: {
          'app-id': API_KEY,
        },
        url: `${API_URL}/user/${id}`,
      });

      return response;
    } catch (error) {
      throw new Error('[Service] Error get user by id');
    }
  };

  updateUser = async (user: UserEntity): Promise<void> => {
    try {
      //const body = ProductAdapter.ProductEntityToDto(product);

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
      await this.http.request<any>({
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
