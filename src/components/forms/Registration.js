import "../../App.css";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { registrationSchema } from "./schemas";

function Registration() {
  const navigate = useNavigate();

  const onSubmit = async (values, actions) => {
    console.log("Submitting form...");
    const isValid = registrationSchema.isValidSync(values);
    console.log("Form values:", values);
    console.log("Form errors:", errors);

    if (isValid) {
      console.log("Form is valid, navigating to /...");
      navigate("/");
    } else {
      console.log("Form is not valid, cannot proceed");
    }
  };

  const { values, errors, handleChange, handleBlur, touched, handleSubmit } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      username: "",
      password: "",
    },
    validationSchema: registrationSchema,
    onSubmit,
  });

  return (
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <form onSubmit={handleSubmit}>
          <div className="modal-header text-center">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Register
            </h1>
          </div>
          <div className="modal-body">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input type="text" className="form-control" id="firstName" value={values.firstName} onChange={handleChange} onBlur={handleBlur} />
              {errors.firstName && touched.firstName && <p className="mt-1 error">{errors.firstName}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" className="form-control" id="lastName" value={values.lastName} onChange={handleChange} onBlur={handleBlur} />
              {errors.lastName && touched.lastName && <p className="mt-1 error">{errors.lastName}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control" id="email" value={values.email} onChange={handleChange} onBlur={handleBlur} />
              {errors.email && touched.email && <p className="mt-1 error">{errors.email}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" className="form-control" id="username" value={values.username} onChange={handleChange} onBlur={handleBlur} />
              {errors.username && touched.username && <p className="mt-1 error">{errors.username}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" className="form-control" id="password" value={values.password} onChange={handleChange} onBlur={handleBlur} />
              {errors.password && touched.password && <p className="mt-1 error">{errors.password}</p>}
            </div>
          </div>
          <div className="modal-footer">
            <button type="submit" className="nav-btn">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Registration;
