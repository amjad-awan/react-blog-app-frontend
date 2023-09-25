import * as yup from "yup";

export const validationSchema = yup.object({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  name: yup.string().required("Username is required"),
  password: yup
    .string()
    .required("Password is required")
    .matches(
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must contain at least one letter, one number, and one special character"
    ),
  roles: yup.string().required("Role is required"),
});
