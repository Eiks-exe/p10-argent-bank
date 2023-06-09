import axios, { AxiosError } from "axios"
import { IUser } from "../interfaces";



// const loginPath = process.env.REACT_APP_APIROUTE ? process.env.REACT_APP_APIROUTE + '/user/login' : '';
const profilePath = 'http://localhost:3001/api/v1/user/profile' 

interface IFD<T> {
    body?: T;
    status?: number;
    message?: string;
}
export const dataFetch = <T>(url: string): Promise<IFD<T>> =>
    fetch(url).then<IFD<T>>((r) => r.json() as Promise<IFD<T>>);

export const dataPost = <T, D>(
    url: string,
    data: D,
    method: 'POST' | 'PUT' | 'DELETE' = 'POST',
    auth = '',
): Promise<IFD<T>> =>
    fetch(url, {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            Authorization: auth,
        },
        body: JSON.stringify(data),
    }).then<IFD<T>>((r) => r.json() as Promise<IFD<T>>);

    export const fetchUser = async (token?: string): Promise<IUser | undefined> => {
      if (!token) {
          throw new Error('Token is required');
      }
      const response = await dataPost<IUser, undefined>(profilePath, undefined, 'POST', 'Bearer ' + token);
      return response.body;
  };

/**
 * Create an instance of Axios with the base URL for the authentication API.
 * @type {import("axios").AxiosInstance}
 */
const authApi = axios.create({
  baseURL: 'http://localhost:3001',
  headers: {
    'Content-Type': 'application/json',
  }
});





/**
 * Perform a login request to the authentication endpoint. 
 * @param {string} email - The user's email.
 * @param {string} password - The user's password.
 * @returns {Promise<string | AxiosError>} - A Promise that resolves to the *authentication token*.
 */
export const Login = async (email: string, password: string): Promise<string | AxiosError> => {
  try {
    const response = await authApi.post('api/v1/user/login', {
      email: email,
      password: password,
    });
    //TODO put the token in the cookie
    return response.data.body.token;
  } catch (error) {
    // handle error
    return error as AxiosError
  }
};


export const updateUser = async (token?: string, user?: Partial<IUser>): Promise<IUser | undefined> => {
  if (!token || !user) {
      throw new Error('Token and user are required');
  }
  const response = await dataPost<IUser, Partial<IUser>>(profilePath, user, 'PUT', 'Bearer ' + token);
  return response.body;
};
