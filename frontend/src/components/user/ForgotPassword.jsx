import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { forgotPassword } from "../../actions/userActions";
import { toast } from "react-toastify";
import { clearError } from "../../slices/authSlice";

export default function ForgotPassword () {

    const [email, setEmail] = useState("");
    const dispatch = useDispatch();
    const { error, message } = useSelector(state => state.authState);

    const submitHandler = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('email', email);
        dispatch(forgotPassword(formData))
        
    }

    useEffect(() => {
        if(message) {
            toast(message, {
                type: 'success',
                position: "bottom-center"
            })
            setEmail("");
            return;
        }

        if(error) {
            toast(error, {
                position: "bottom-center",
                type: 'error' 
            });
            dispatch(clearError());  // clear the error after showing
        }

    }, [message, error, dispatch])


    return (
        <div className="row wrapper">
            <div className="col-10 col-lg-5">
                <form onSubmit={submitHandler} className="shadow-lg">
                    <h1 className="mb-3">Forgot Password</h1>
                    <div className="form-group">
                        <label htmlFor="email_field">Enter Email</label>
                        <input
                            type="email"
                            id="email_field"
                            className="form-control"
                            value={email}
                            onChange={e=>setEmail(e.target.value)}
                        />
                    </div>

                    <button
                        id="forgot_password_button"
                        type="submit"
                        className="btn btn-block py-3">
                        Send Email
                    </button>

                </form>
            </div>
        </div>
    )
}