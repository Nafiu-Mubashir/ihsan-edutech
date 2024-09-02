import Cookies from 'js-cookie';
import { toast } from 'react-toastify'; // Assuming you're using react-toastify for notifications
import { authStart, authUser, logout } from '..';
import axiosInterceptor from '../../../../api';

export const loginAction = (obj) => async (dispatch) => {
    try {
        dispatch(authStart());
        const response = await axiosInterceptor.post('account/login/', obj);
        console.log(response.data);

        if (response?.status === 200) {
            console.log('Access Token:', response.data.access); // Debugging
            console.log('Refresh Token:', response.data.refresh); // Debugging
            console.log('User Data:', response.data.user); // Debugging

            dispatch(authUser({ token: response.data.access, refreshToken: response.data.refresh, user: response.data.user }));
            toast.success('Login successfully');
        } else {
            toast.error(response?.data?.message);
            console.log(response?.data?.message);
        }

        return response;
    } catch (error) {
        toast.error(error?.response?.data?.detail);
        console.error(error?.response?.data?.detail);
    }
};


export const registrationAction = (obj) => async (dispatch) => {
    try {
        dispatch(authStart()); // Start the authentication process (sets loading state)

        const res = await axiosInterceptor.post('account/register/', obj);
        console.log(res);

        if (res?.status === 201) {
            // dispatch(authSuccess()); // Dispatch success action if needed
            toast.success(res?.data?.message);
        } else {
            // dispatch(authFailure(res?.data?.message)); // Handle failure case
            toast.error(res?.data?.message);
            console.log(res?.data?.message);
        }

        return res;
    } catch (error) {
        // dispatch(authFailure(error?.response?.data?.message)); // Dispatch failure action with error message
        console.log(error);
        if (error?.response?.status === 400) {
            toast.error(error?.response?.data?.email?.[0]); // Corrected the error message access
        }else{
            toast.error(error?.response?.data?.message);
        }
    }
};

export const emailVerificationAction = (obj) => async (dispatch) => {
    try {
        dispatch(authStart());
        const res = await axiosInterceptor.post('account/confirm/', obj)
        if (res?.status === 201) {
            console.log(res);
            toast.success(res?.data?.message);
        }

        return res

    } catch (error) {
        console.log(error);

    }
}

export const logoutAction = () => async (dispatch) => {
    try {
        // If you have an API call for logging out
        // await apiRequest.post('/auth/logout');

        dispatch(logout());
        Cookies.remove('authToken');
        Cookies.remove('user');
        toast.success('Successfully logged out');

        return { status: 200, message: 'Logged out successfully' };
    } catch (error) {
        if (error.response) {
            toast.error(error.response.data.message);
        }
        console.error(error);
    }
};
