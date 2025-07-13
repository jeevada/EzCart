import { 
    forgotPasswordFail,
    forgotPasswordRequest,
    forgotPasswordSuccess,
    loadUserFail,
    loadUserRequest,
    loadUserSuccess,
    loginFail, 
    loginRequest, 
    loginSuccess, 
    logoutFail, 
    logoutSuccess, 
    registerFail, 
    registerRequest, 
    registerSuccess, 
    resetPasswordFail, 
    resetPasswordRequest, 
    resetPasswordSuccess, 
    updatePasswordFail, 
    updatePasswordRequest, 
    updatePasswordSuccess, 
    updateProfileFail, 
    updateProfileRequest,
    updateProfileSuccess
} from "../slices/authSlice";
import axios from 'axios';

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch(loginRequest())
        const { data } = await axios.post('/api/v1/login', {email, password});
        dispatch(loginSuccess(data))
    } catch(error) {
        dispatch(loginFail(error.response.data.message))
    }
}

export const register = (userData) => async (dispatch) => {
    try {
        dispatch(registerRequest())
        const config = {
            headers: {
                'Content-type': 'multipart/form-data'
            }
        }

        const { data } = await axios.post('/api/v1/register', userData, config);
        dispatch(registerSuccess(data))
    } catch(error) {
        dispatch(registerFail(error.response.data.message))
    }
} 

export const loadUser = async (dispatch) => {
    try {
        dispatch(loadUserRequest())

        const { data } = await axios.get('/api/v1/myprofile');
        dispatch(loadUserSuccess(data))
    } catch(error) {
        dispatch(loadUserFail(error.response.data.message))
    }
} 

export const logout = async (dispatch) => {
    try {
        await axios.get('/api/v1/logout');
        dispatch(logoutSuccess())
    } catch(error) {
        dispatch(logoutFail)
    }
}

export const updateProfile = (userData) => async (dispatch) => {
    try {
        dispatch(updateProfileRequest())
        const config = {
            headers: {
                'Content-type': 'multipart/form-data'
            }
        }

        const { data } = await axios.put('/api/v1/update', userData, config);
        dispatch(updateProfileSuccess(data))
    } catch(error) {
        dispatch(updateProfileFail(error.response.data.message))
    }
}

export const updatePassword = (formData) => async (dispatch) => {
    try {
        dispatch(updatePasswordRequest());

        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        await axios.put('/api/v1/password/change', formData, config);
        console.log("password updated successfully")
        dispatch(updatePasswordSuccess())
    } catch(error) { 
        console.log("password could not updated successfully")
        dispatch(updatePasswordFail(error.response.data.message))
    }
}

export const forgotPassword = (formData) => async (dispatch) => {
    try {
        dispatch(forgotPasswordRequest());

        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        const { data } = await axios.post('/api/v1/password/forgot', formData, config);
        console.log("forgot password updated successfully")
        dispatch(forgotPasswordSuccess(data))
    } catch(error) { 
        console.log("forgot password could not updated successfully")
        dispatch(forgotPasswordFail(error.response.data.message))
    }
}

export const resetPassword = (formData, token) => async (dispatch) => {
    try {
        dispatch(resetPasswordRequest());

        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        const { data } = await axios.post(`/api/v1/password/reset/${token}`, formData, config);
        console.log("reset password updated successfully")
        dispatch(resetPasswordSuccess(data))
    } catch(error) { 
        console.log("reset password could not updated successfully")
        dispatch(resetPasswordFail(error.response.data.message))
    }
}