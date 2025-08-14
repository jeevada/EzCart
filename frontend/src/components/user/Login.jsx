import { Fragment, useEffect, useState } from "react";
import MetaData from '../layouts/MetaData';
import { login } from "../../actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { clearError } from "../../slices/authSlice";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const { loading, error, isAuthenticated } = useSelector(state => state.authState);
    const navigate = useNavigate();
    
    const location = useLocation();
    const redirect = location.search?'/'+location.search.split('=')[1]:'/';

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(login(email, password))
    }

    useEffect(() => {
        if(isAuthenticated) {
            navigate(redirect) 
        }
        if(error) {
            toast.error(error, {
                position: "bottom-center"
            });
            dispatch(clearError());  // clear the error after showing
        }
    }, [error, isAuthenticated, navigate])

    return (
        <Fragment>
            <MetaData title={'Login'} />
            <div className="row wrapper"> 
                <div className="col-10 col-lg-5">
                    <form onSubmit={submitHandler} className="shadow-lg">
                        <h1 className="mb-3">Login</h1>
                        <div className="form-group">
                            <label htmlFor="email_field">Email</label>
                            <input 
                                type="email"
                                id="email_field"
                                className="form-control"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </div>
            
                        <div className="form-group">
                            <label htmlFor="password_field">Password</label>
                            <input
                                type="password"
                                id="password_field"
                                className="form-control"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                        </div>

                        <div className="login-container">
                            <Link to="/password/forgot" className="forgot-link">
                                Forgot Password?
                            </Link>
            
                            <button
                                id="login_button"
                                type="submit"
                                className="login-pill-btn"
                                disabled={loading}
                            >
                                LOGIN
                            </button>

                            <p className="register-text">
                                Not a Member ? <Link to="/register" className="signup-link">Signup</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </Fragment>
    )
}