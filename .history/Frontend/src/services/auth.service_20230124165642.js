import axios from 'axios';

export const login = (responseBody) => {
    const body = {
        email: responseBody.email,
        password: responseBody.password,
    };
    return axios.post('http://localhost:3000/signup', body);
}

export const createUser = (responseBody) => {
    return axios.post('http://localhost:3000/signup', responseBody);
}

export const forgotPassword = (email) => {
    const body = {
        email,
    };
    return axios.post('http://localhost:3000/auth/password', body);
}

export const validateUrl = (userId, token) => {
    const body = { 
        userId: userId.toString(),
        token: token.toString(),
    }
    return axios.post('http://localhost:3000/signup/verification', body);
}