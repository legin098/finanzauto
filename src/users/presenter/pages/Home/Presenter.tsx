import React, {useEffect, useState} from 'react';
import Component from './Component';
import {PropsPresenter as Props} from './models';
import {
  useCreateUser,
  useDeleteUser,
  useGetListUser,
  useGetUserById,
} from '../../hooks';
import {UserEntity} from '@src/users/domain/models';

const Presenter = ({navigation}: Props) => {
  const [listUsers, setlistUsers] = useState<UserEntity[]>([]);

  const {
    data: getUsers,
    status: statusListUser,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    isLoading: isLoadingListUser,
  } = useGetListUser(10);
  const {mutateAsync: createUser} = useCreateUser();
  const {mutateAsync: getUserById, data: userDetail} = useGetUserById();
  const {mutateAsync: deleteUser} = useDeleteUser();

  const handleOnSubmit = async (data: UserEntity) => {
    try {
      await createUser(data);
    } catch (error) {
      console.log('Presenter error: ', error);
    }
  };

  const hanleGetUserById = async (id: string) => {
    try {
      await getUserById({id});
    } catch (error) {
      console.log('Presenter error: ', error);
    }
  };

  const handleDeleteUser = async (id: string) => {
    try {
      await deleteUser({id});
    } catch (error) {
      console.log('Presenter error: ', error);
    }
  };

  const handleFetchMore = () => {
    if (hasNextPage || isFetchingNextPage) fetchNextPage();
  };

  useEffect(() => {
    const isAvaibleData = !isLoadingListUser && !isFetchingNextPage;
    if (isAvaibleData) {
      const pages = getUsers?.pages || [];
      const items = pages[pages.length - 1];
      setlistUsers(prev => [...prev, ...items]);
      return;
    }
  }, [isFetchingNextPage]);

  useEffect(() => {
    const isSuccess = statusListUser === 'success';
    if (isSuccess) {
      const pages = getUsers?.pages || [];
      const numberPages = pages.length;
      const isFirstLoading = numberPages === 1;
      const items = isFirstLoading
        ? pages[numberPages - 1]
        : pages.reduce((acc, curr) => [...acc, ...curr]);
      setlistUsers(prev => [...prev, ...items]);
    }
  }, [isLoadingListUser, statusListUser]);

  return (
    <Component
      listUser={listUsers}
      userDetail={userDetail}
      onGetUserById={hanleGetUserById}
      onDeleteUser={handleDeleteUser}
      onSubmit={handleOnSubmit}
      onFetchMore={handleFetchMore}
    />
  );
};

export default Presenter;
