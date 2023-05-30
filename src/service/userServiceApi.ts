import axios, { AxiosError } from "axios"


/**
 * Create an instance of Axios with the base URL for the authentication API.
 * @type {import("axios").AxiosInstance}
 */
const authApi = axios.create({
  baseURL: 'http://localhost:3001',
});

/**
 * Perform a login request to the authentication endpoint. 
 * @param {string} email - The user's email.
 * @param {string} password - The user's password.
 * @returns {Promise<string | AxiosError>} - A Promise that resolves to the *authentication token*.
 */
export const Login = async (email: string, password: string): Promise<string| AxiosError> => {
    try {
      const response = await authApi.post('api/v1/user/login', {
        email: email,
        password: password,
      });
      //TODO put the token in the cookie
      return response.data;
    } catch (error) {
      // handle error
      return error as AxiosError
    }
  };


// create an axios instance with the auth API base URL

export {}