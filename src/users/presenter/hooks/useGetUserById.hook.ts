import {UserEntity} from '@src/users/domain/models';
import injections from '../injections';
import {useMutation} from '@tanstack/react-query';
import {REQUEST_ID} from '../constants';

const useGetUserById = () => {
  return useMutation<UserEntity, Error, {id: string}>(
    [REQUEST_ID.getUserById],
    ({id}) => injections.usersUseCase.getUserById(id),
  );
};

export default useGetUserById;
