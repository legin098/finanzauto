import {useInfiniteQuery, useQuery} from '@tanstack/react-query';
import injections from '../injections';
import {REQUEST_ID} from '../constants';
import {UserEntity} from '@src/users/domain/models';

const useGetListUser = (itemsPerPage: number = 10) => {
  return useInfiniteQuery<UserEntity[], Error>(
    [REQUEST_ID.getListUser],
    ({pageParam = 1}) =>
      injections.usersUseCase.getListUser(itemsPerPage, pageParam),
    {
      getNextPageParam: (lastPage, allPages) => {
        const nextPage =
          lastPage.length === itemsPerPage ? allPages.length + 1 : undefined;
        return nextPage;
      },
    },
  );
};

export default useGetListUser;
