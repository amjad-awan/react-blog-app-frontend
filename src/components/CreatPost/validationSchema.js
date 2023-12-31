import * as yup from 'yup';

export const validationSchema = yup.object({
  title: yup.string().required('Title is required'),
  description: yup.string().required('Description is required'),
  photo: yup.mixed().required('Photo is required'),
});

