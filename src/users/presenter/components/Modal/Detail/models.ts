import {UserEntity} from '@src/users/domain/models';

export type Props = {
  isVisible: boolean;
  onClose(): void;
  user?: UserEntity;
  onDelete(): void;
};
