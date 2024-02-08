import {UserEntity} from '@src/users/domain/models';
import injections from '../injections';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import {REQUEST_ID} from '../constants';

const useCreateUser = () => {
  const queryClient = useQueryClient();

  return useMutation<void, Error, UserEntity>(
    [REQUEST_ID.createUser],
    data => injections.usersUseCase.createUser(data),
    {
      onSuccess: async () => {
        await queryClient.invalidateQueries([REQUEST_ID.getListUser]);
      },
    },
  );
};

export default useCreateUser;
