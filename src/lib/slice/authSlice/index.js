import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

const initialState = {
    user: null,
    token: null,
    refreshToken: null,
    isAuthenticated: false,
    loading: false,
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        authStart(state) {
            state.loading = true;
            state.error = null;
        },
        authSuccess(state) {
            state.loading = false;
            state.error = null;
        },
        authUser(state, action) {
            state.isAuthenticated = true;
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.refreshToken = action.payload.refreshToken;

            // Store token, refresh token, and user data in cookies
            Cookies.set('authToken', action.payload.token, { secure: true, sameSite: 'Strict' });
            Cookies.set('authTokenRefresh', action.payload.refreshToken, { secure: true, sameSite: 'Strict' }); // Corrected this line
            Cookies.set('user', JSON.stringify(action.payload.user), { secure: true, sameSite: 'Strict' });
        },
        authFailure(state, action) {
            state.loading = false;
            state.error = action.payload;
        },
        logout(state) {
            state.isAuthenticated = false;
            state.user = null;
            state.token = null;
            state.refreshToken = null;

            // Remove all cookies related to auth
            Cookies.remove('authToken');
            Cookies.remove('authTokenRefresh'); // Make sure to remove the refresh token as well
            Cookies.remove('user');
        },
    },
});

export const {
    authStart,
    authSuccess,
    authUser,
    authFailure,
    logout,
} = authSlice.actions;

export default authSlice.reducer;
