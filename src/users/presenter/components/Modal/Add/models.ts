import {UserEntity} from '@src/users/domain/models';

export type Props = {
  isVisible: boolean;
  onSubmit: (data: UserEntity) => void;
  onClose: () => void;
};
