import {UserEntity} from '@src/users/domain/models';
import {ListUserDto, UserDto} from '../models';

export class UserAdapter {
  static usersDtotoEntity(data: UserDto[]): UserEntity[] {
    return data.map(user => ({
      id: user.id ?? '',
      email: user.email ?? '',
      dateOfBirth: user.dateOfBirth ?? '',
      registerDate: user.registerDate ?? '',
      gender: user.gender ?? '',
      firstName: user.firstName ?? '',
      lastName: user.lastName ?? '',
      picture: user.picture ?? '',
      phone: user.phone ?? '',
      title: user.title ?? '',
      location: {
        city: user.location?.city ?? '',
        country: user.location?.country ?? '',
        state: user.location?.state ?? '',
        street: user.location?.street ?? '',
        timezone: user.location?.timezone ?? '',
      },
    }));
  }
  static userDtotoEntity(user: UserDto): UserEntity {
    return {
      id: user.id ?? '',
      email: user.email ?? '',
      dateOfBirth: user.dateOfBirth ?? '',
      registerDate: user.registerDate ?? '',
      gender: user.gender ?? '',
      firstName: user.firstName ?? '',
      lastName: user.lastName ?? '',
      picture: user.picture ?? '',
      phone: user.phone ?? '',
      title: user.title ?? '',
      location: {
        city: user.location?.city ?? '',
        country: user.location?.country ?? '',
        state: user.location?.state ?? '',
        street: user.location?.street ?? '',
        timezone: user.location?.timezone ?? '',
      },
    };
  }

  static userToDto(user: UserEntity) {
    return {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phone: user.phone,
    };
  }
}
