import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAuthenticated: false,
    user: null,
    hasTakenTest: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            const { email, password } = action.payload;
            // In a real app, you'd check these credentials with a backend
            if (email && password) {
                state.isAuthenticated = true;
                state.user = { email };
                localStorage.setItem('user', JSON.stringify({ email }));
            }
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.user = null;
            state.hasTakenTest = false;
            localStorage.removeItem('user');
        },
        loadUserFromStorage: (state) => {
            const user = JSON.parse(localStorage.getItem('user'));
            if (user) {
                state.isAuthenticated = true;
                state.user = user;
            }
        },
        setTestStatus: (state, action) => {
            state.hasTakenTest = action.payload;
        },
    },
});

export const { login, logout, loadUserFromStorage, setTestStatus } = authSlice.actions;

export default authSlice.reducer;
