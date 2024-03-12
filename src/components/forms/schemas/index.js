import * as yup from "yup";

export const logInSchema = yup.object().shape({
  username: yup
    .string()
    .min(5, "Minimum number of characters is 5")
    .max(21, "Minimum number of characters is 21")
    .required("This field is required"),
  password: yup
    .string()
    .required("This field is required")
    .lowercase("Must contain at least one uppercase letter.")
    .uppercase("Must contain at least one lowercase letter.")
    .min(5, "Minimum number of characters is 5"),
});

export const registrationSchema = yup.object().shape({
  firstName: yup.string().required("This field is required"),
  lastName: yup.string().required("This field is required"),
  email: yup.string().email("Input is not an email").required("This field is required"),
  username: yup.string().min(5, "Minimum number of characters is 5").max(21, "Minimum number of characters is 21").required("This field is required"),
  password: yup.string().required("This field is required").lowercase("Must contain at least one uppercase letter.").uppercase("Must contain at least one lowercase letter.").min(5, "Minimum number of characters is 5"),
});
