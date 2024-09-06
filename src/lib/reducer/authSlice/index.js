import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
const token = Cookies.get('authToken');
const user = Cookies.get('user');
const initialState = {
    user: user,
    token: token,
    refreshToken: null,
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
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.refreshToken = action.payload.refreshToken;
            Cookies.set('authToken', action.payload.token, { secure: true, sameSite: 'Strict' });
            Cookies.set('authTokenRefresh', action.payload.refreshToken, { secure: true, sameSite: 'Strict' });
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
            Cookies.remove('authToken');
            Cookies.remove('authTokenRefresh');
            Cookies.remove('user');
        },
        loadUserFromCookies(state) {
            const token = Cookies.get('authToken');
            const refreshToken = Cookies.get('authTokenRefresh');
            const user = Cookies.get('user') ? JSON.parse(Cookies.get('user')) : null;

            if (token && user) {
                // state.isAuthenticated = true;
                state.token = token;
                state.refreshToken = refreshToken;
                state.user = user;
            } else {
                // state.isAuthenticated = false;
                state.token = null;
                state.refreshToken = null;
                state.user = null;
            }
        },
    },
});

export const {
    authStart,
    authSuccess,
    authUser,
    authFailure,
    logout,
    loadUserFromCookies,
} = authSlice.actions;

export default authSlice.reducer;
