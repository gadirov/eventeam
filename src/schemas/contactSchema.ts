import * as Yup from 'yup';
export const contactSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phone: Yup.string().required(),
    subject: Yup.string().required(),
    message: Yup.string().required('Message is required'),
  });