import {StackScreenProps} from '@react-navigation/stack';
import {AuthStackParamList} from '@src/common/presenter/models';
import {UserEntity} from '@src/users/domain/models';

export type PropsPresenter = StackScreenProps<AuthStackParamList, 'Home'>;

export type PropsComponent = {
  listUser?: UserEntity[];
  userDetail?: UserEntity;
  onSubmit: (data: UserEntity) => void;
  onGetUserById: (id: string) => void;
  onDeleteUser: (id: string) => void;
  onFetchMore: () => void;
};
