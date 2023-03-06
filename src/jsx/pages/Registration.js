import React,{useState} from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { connect, useDispatch } from 'react-redux';
import {
    confirmedSignupAction,
    signupAction,
} from '../../store/actions/AuthActions';
import { useHistory } from "react-router-dom";
// image
import logo from "../../images/logo-full.png";

function Register(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    let errorsObj = { email: '', password: '' };
    const [errors, setErrors] = useState(errorsObj);
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');

    const dispatch = useDispatch();
    const history = useHistory();

    function onSignUp(e) {
        e.preventDefault();
        let error = false;
        const errorObj = { ...errorsObj };
        if (email === '') {
            errorObj.email = 'Email is Required';
            error = true;
        }
        if (password === '') {
            errorObj.password = 'Password is Required';
            error = true;
        }
		else axios.post('http://localhost:8008/users', {
			name: name,
			email: email,
			password: password,
			confPassword: confPassword
		});
		history.push("/login");
        setErrors(errorObj);
        if (error) return;
        dispatch(confirmedSignupAction(true));
        dispatch(signupAction(name, email, password, confPassword, props.history));
    }
	return (
		<div className="authincation h-100 p-meddle">
			<div className="container h-100">
				<div className="row justify-content-center h-100 align-items-center">
					<div className="col-md-6">
						<div className="authincation-content">
							<div className="row no-gutters">
								<div className="col-xl-12">
									<div className="auth-form">
										<div className="text-center mb-3">
											<Link to="/login">
												<img src={logo} alt="" />
											</Link>
										</div>
										<h4 className="text-center mb-4 ">Sign up your account</h4>
										{props.errorMessage && (
											<div className=''>
												{props.errorMessage}
											</div>
										)}
										{props.successMessage && (
											<div className=''>
												{props.successMessage}
											</div>
										)}
										<form onSubmit={onSignUp}>
											<div className="form-group mb-3">
												<label className="mb-1 ">
													<strong>Username</strong>
												</label>
												<input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" placeholder="username" required/>
											</div>
											<div className="form-group mb-3">
												<label className="mb-1 ">
												  <strong>Email</strong>
												</label>
												<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="hello@example.com" required/>
											</div>
											{errors.email && <div>{errors.email}</div>}
											<div className="form-group mb-3">
												<label className="mb-1 ">
													<strong>Password</strong>
												</label>
												<input type="password" 
													value={password}
													onChange={(e) =>
														setPassword(e.target.value)
													}
												  className="form-control"
												  defaultValue="Password"
												required/>
											</div>
											{errors.password && <div>{errors.password}</div>}
											<div className="form-group mb-3">
												<label className="mb-1 ">
													<strong>Confirm Password</strong>
												</label>
												<input type="password" 
													value={confPassword}
													onChange={(e) =>
														setConfPassword(e.target.value)
													}
												  className="form-control"
												  defaultValue="Password"
												required/>
											</div>
											<div className="text-center mt-4">
												<button type="submit" className="btn btn-primary btn-block">Sign me up</button>
											</div>
										</form>
										<div className="new-account mt-3">
											<p className="">
												Already have an account?{" "}
												<Link className="text-primary" to="/login">
													Sign in
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

const mapStateToProps = (state) => {
    return {
        errorMessage: state.auth.errorMessage,
        successMessage: state.auth.successMessage,
        showLoading: state.auth.showLoading,
    };
};

export default connect(mapStateToProps)(Register);

