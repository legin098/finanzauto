import * as yup from 'yup';

export const addUserSchemeValidation = yup.object().shape({
  firstName: yup
    .string()
    .required('Required!')
    .min(2, 'Min 2 characters!')
    .max(50, 'Max 50 characters!'),
  lastName: yup
    .string()
    .required('Required!')
    .min(2, 'Min 2 characters!')
    .max(50, 'Max 50 characters!'),
  email: yup.string().email('Invalid email').required('Required!'),
  phone: yup
    .string()
    .min(10, 'Min 10 characters!')
    .max(10, 'Max 10 characters!'),
});
