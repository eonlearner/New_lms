import React, { useState } from 'react'
import { connect, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { loadingToggleAction,loginAction,
} from '../../store/actions/AuthActions';
// image
import logo from "../../images/logo-full.png";


function ForgotPassword (props) {
  const [email, setEmail] = useState('');
  let errorsObj = { email: ''};
  const [errors, setErrors] = useState(errorsObj);
  
  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    let error = false;
    const errorObj = { ...errorsObj };
    if (email === '') {
        errorObj.email = 'Email is Required';
        error = true;
    }
    history.push("/login");
    setErrors(errorObj);
    if (error) return;
    dispatch(loadingToggleAction(true));
    dispatch(loginAction(email, props.history));
  };
  return (
    <div className="authincation h-100 p-meddle">
      <div className="container h-100">
        {" "}
        <div className="row justify-content-center h-100 align-items-center">
          <div className="col-md-6">
            <div className="authincation-content">
              <div className="row no-gutters">
                <div className="col-xl-12">
                  <div className="auth-form">
                    <div className="text-center mb-3">
                      <Link to="/dashboard">
                        <img src={logo} alt="" />
                      </Link>
                    </div>
                    <h4 className="text-center mb-4 ">Forgot Password</h4>
                    <form onSubmit={onSubmit}>
                      <div className="form-group">
                        <label className="mb-1">
                          <strong>Registered Email</strong>
                        </label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="hello@example.com"/>
												{errors.email && <div className="text-danger fs-12">{errors.email}</div>}
                      </div>
                      <div className="text-center">
                        <button type="submit" className="btn btn-primary btn-block" >
                          SUBMIT
                        </button>
                      </div>
                    </form>
                    <div className="new-account mt-3">
											<p className="">
												Want To Create an Account?{" "}
												<Link className="text-primary" to="/page-register">
													Sign up
												</Link>
											</p>
										</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
