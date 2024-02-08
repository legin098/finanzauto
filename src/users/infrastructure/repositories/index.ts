import {IRepositoryInfrastructure} from '@common/infrastructure/repositories/infrastructure.repository';
import {IRepositoryInfrastructureUsers} from '@src/users/domain/repositories';
import {UsersRepositoryImpl} from './users.repository';

export const repositoryInfrastructureUsers = (
  infrastructure: IRepositoryInfrastructure,
): IRepositoryInfrastructureUsers => ({
  users: new UsersRepositoryImpl(infrastructure.http),
});
