import axios from 'axios';

export const login = (responseBody) => {
    const body = {
        email: responseBody.email,
        password: responseBody.password,
    };
    return axios.post('http://192.168.100.23:3001/auth/login', body);
}

export const createUser = (responseBody) => {
    return axios.post('http://192.168.100.23:3001/users', responseBody);
}

export const forgotPassword = (email) => {
    const body = {
        email,
    };
    return axios.post('http://192.168.100.23:3001/auth/forgotpassword', body);
}

export const validateUrl = (userId, token) => {
    const body = { 
        userId: userId.toString(),
        token: token.toString(),
    }
    return axios.post('http://192.168.100.23:3001/auth/validateUrl', body);
}