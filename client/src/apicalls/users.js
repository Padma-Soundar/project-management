const { apiRequest } = require(".");

export const RegisterUser = async (payload) => apiRequest('post', 'https://project-management-d5e2.onrender.com/api/users/register', payload);
export const LoginUser = async (payload) => apiRequest('post', 'https://project-management-d5e2.onrender.com/api/users/login', payload);
export const GetLoggedInUser = async () => apiRequest('get', 'https://project-management-d5e2.onrender.com/api/users/get-logged-in-user');
