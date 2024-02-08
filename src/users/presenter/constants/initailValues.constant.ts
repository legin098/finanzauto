import {UserEntity} from '@src/users/domain/models';

export const USER_INITAL_VALUE: UserEntity = {
  id: '',
  email: '',
  dateOfBirth: '',
  registerDate: '',
  gender: '',
  firstName: '',
  lastName: '',
  picture: '',
  phone: '',
  title: '',
  location: {
    city: '',
    country: '',
    state: '',
    street: '',
    timezone: '',
  },
};
