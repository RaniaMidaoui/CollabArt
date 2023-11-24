import axios from 'axios';

export const login = async (responseBody) => {
   try {
        const body = {
            email: responseBody.email,
            password: responseBody.password,
        };
        const response = await axios.post('http://localhost:8080/login', body);

        const user = response.data;

        localStorage.setItem('user', JSON.stringify(user));

        return user;
   } catch (error) {    
        console.error('Login error:', error);
        throw error;
   }
}

export const logout = () => {  
    localStorage.removeItem('user');
}

export const isAuthenticated = () => {
    const user = localStorage.getItem('user');
    return !!user; 
  };

export const getUser = () => {
    const user = localStorage.getItem('user');
    return JSON.parse(user);
}

export const createUser = async (responseBody) => {
    try {
        const body = {
            email: responseBody.email,
            password: responseBody.password,
            verifyPassword: responseBody.verifyPassword,
            firstName: responseBody.firstName,
            lastName: responseBody.lastName,
            role: responseBody.role,
        };
        const response = await axios.post('http://localhost:8080/signup', body);

        const user = response.data;

        return user;
    } catch (error) {
        console.error('Signup error:', error);
        throw error;
    }
}

// export const forgotPassword = (email) => {
//     const body = {
//         email,
//     };
//     return axios.post('http://localhost:8080/auth/password', body);
// }

// export const validateUrl = (userId, token) => {
//     const body = { 
//         userId: userId.toString(),
//         token: token.toString(),
//     }
//     return axios.post('http://localhost:8080/signup/verification', body);
// }