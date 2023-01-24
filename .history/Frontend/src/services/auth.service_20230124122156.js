import axios from 'axios';

export const login = (responseBody) => {
    const body = {
        email: responseBody.email,
        password: responseBody.password,
    };
    return axios.post('http://localhost:3000/login', body);
}

export const createUser = (responseBody) => {
    return axios.post('http://localhost:3000/users', responseBody);
}

export const forgotPassword = (email) => {
    const body = {
        email,
    };
    return axios.post('http://localhost:3000/auth/forgotpassword', body);
}

export const validateUrl = (userId, token) => {
    const body = { 
        userId: userId.toString(),
        token: token.toString(),
    }
    return axios.post('http://localhost:3000/auth/validateUrl', body);
}