import injections from '../injections';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import {REQUEST_ID} from '../constants';

const useDeleteUser = () => {
  const queryClient = useQueryClient();

  return useMutation<void, Error, {id: string}>(
    [REQUEST_ID.deleteUser],
    ({id}) => injections.usersUseCase.deleteUser(id),
    {
      onSuccess: async () => {
        await queryClient.invalidateQueries([REQUEST_ID.getListUser]);
      },
    },
  );
};

export default useDeleteUser;
