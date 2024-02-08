import {repositoryInfrastructure} from '@src/common/infrastructure/repositories';
import {useCasesUsers} from '@src/users/domain/useCases';
import {repositoryInfrastructureUsers} from '@src/users/infrastructure/repositories';

const repositoryInfrastructureInstance = repositoryInfrastructure();
const repositoryInfrastructureUsersInstance = repositoryInfrastructureUsers(
  repositoryInfrastructureInstance,
);
const useCasesUsersInstance = useCasesUsers(
  repositoryInfrastructureUsersInstance,
);

export default useCasesUsersInstance;
