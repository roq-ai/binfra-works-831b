import * as yup from 'yup';

export const financialValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string(),
  company_id: yup.string().nullable(),
  user_id: yup.string().nullable(),
});
