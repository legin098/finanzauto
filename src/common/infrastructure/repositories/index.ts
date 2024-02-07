import {IRepositoryInfrastructure} from './infrastructure.repository';
import {Http} from './http.repository';

export const repositoryInfrastructure = (): IRepositoryInfrastructure => {
  const http = new Http();

  return {
    http,
  };
};
