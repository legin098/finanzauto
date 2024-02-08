import {IRepositoryInfrastructureUsers} from '../repositories';
import {UsersUseCase} from './users.useCase';

export const useCasesUsers = (
  repositories: IRepositoryInfrastructureUsers,
) => ({
  usersUseCase: new UsersUseCase(repositories.users),
});
