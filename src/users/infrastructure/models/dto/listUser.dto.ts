import {UserDto} from './user.dto';

export type ListUserDto = {
  data: UserDto[];
  total: number;
  page: number;
  limit: number;
};
