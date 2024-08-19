import { createContext, useContext, useState, useEffect } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';
import axiosInterceptor from '../../api';
import { useNavigate } from 'react-router-dom'; // Correct import
import PropTypes from 'prop-types';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState()
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser) {
            setUser(storedUser);
            axiosInterceptor.defaults.headers.common['Authorization'] = `Bearer ${storedUser.token}`;
        }

        const loginUser = Cookies.get('token');
        console.log(loginUser);
        
        if (loginUser) {
            setIsAuthenticated(loginUser);
            axiosInterceptor.defaults.headers.common['Authorization'] = `Bearer ${loginUser.token}`;
        }
    }, []);

    const login = async (obj) => {
        try {
            const { data } = await axiosInterceptor.post('<LOGIN_ENDPOINT>', obj); // Replace <LOGIN_ENDPOINT> with your API endpoint
            setUser(data);
            localStorage.setItem('user', JSON.stringify(data));
            Cookies.set('token', data.token, { expires: 2 });
            axiosInterceptor.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
            queryClient.setQueryData('user', data);
        } catch (error) {
            console.error('Login error:', error);
            toast.error(`Login failed: ${error.message}`);
        }
    };

    const logout = async () => {
        setLoading(true);
        try {
            const token = Cookies.get('token');
            await axiosInterceptor.post('<LOGOUT_ENDPOINT>', {}, { // Replace <LOGOUT_ENDPOINT> with your API endpoint
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            setLoading(false);
            setUser(null);
            localStorage.removeItem('user');
            Cookies.remove('token');
            queryClient.removeQueries('user');
            delete axiosInterceptor.defaults.headers.common['Authorization'];
            navigate('/auth/login'); // Redirect to login page after logout
        } catch (error) {
            setLoading(false);
            console.error('Logout error:', error);
        }
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, setUser, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export const useAuthCtx = () => useContext(AuthContext);
