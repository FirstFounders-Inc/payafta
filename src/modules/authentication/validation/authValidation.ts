import * as yup from 'yup';

export const loginSchema = yup.object({
  email: yup.string().required('Email is required'),

  password: yup.string().required('Password is required'),
});

export const signupSchema = yup.object({
  firstname: yup.string().required('Firstname is required'),
  lastname: yup.string().required('Lastname is required'),
  email: yup.string().required('Email is required'),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 character long')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\-]).{8,}$/,
      'Password must contain at least one uppercase letter, one lowercase letter, one special character',
    ),
  confirmpassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords do not match')
    .required('Required'),
});
