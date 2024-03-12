import "../../App.css";
import { useFormik } from 'formik';
import { useNavigate } from "react-router-dom";
import { logInSchema } from "./schemas/index.js";

function LogIn() {
    const navigate = useNavigate();

    const onSubmit = async (values, actions) => {
        console.log("Submitting form...");
        const isValid = logInSchema.isValidSync(values);
        console.log("Form values:", values);
        console.log("Form errors:", errors);
    
        if (isValid) {
            console.log("Form is valid, navigating to /user...");
            navigate("/user");
        } else {
            console.log("Form is not valid, cannot proceed");
        }
    };
    

    const { values, errors, handleChange, handleBlur, touched, handleSubmit } = useFormik({
        initialValues: {
          username: '',
          password: '',
        },
        validationSchema: logInSchema,
        onSubmit,
      });

console.log(errors);

    return (
        <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
        <form onSubmit={handleSubmit}>
          <div className="modal-header text-center">
            <h1 className="modal-title fs-5" id="exampleModalLabel">Log In</h1>
          </div>
          <div className="modal-body">
            
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" value={values.username} onChange = {handleChange} onBlur={handleBlur} className= "form-control" id="username" />
                {errors.username && touched.username && <p className="mt-1 error">{errors.username}</p>}
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" value={values.password} onChange = {handleChange} onBlur={handleBlur} className="form-control" id="password" />
                {errors.password && touched.password && <p className="mt-1 error">{errors.password}</p>}
              </div>
            
          </div>
          <div className="modal-footer">
            <button type="submit" className="nav-btn">Log In</button>
          </div>
          </form>
        </div>
      </div>
    );
}

export default LogIn;