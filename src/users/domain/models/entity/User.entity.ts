export type Title = 'mr' | 'mrs' | 'miss' | 'dr' | '';
export type Gender = 'male' | 'female' | 'other' | '';
export interface UserEntity {
  id: string;
  title: Title;
  name: string;
  lastName: string;
  gender: Gender;
  email: string;
  dateOfBirth: string;
  registerDate: string;
  phone: string;
  picture: string;
  location: Location;
}

export interface Location {
  calle: string;
  ciudad: string;
  estado: string;
  pais: string;
  zonaHoraria: string;
}
