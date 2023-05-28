import axios from "axios"

const authApi = axios.create({
  baseURL: 'https://your-auth-api.com',
});

// make a POST request to the /login endpoint with email and password


const login = async (email: string, password: string) => {
    try {
      const response = await authApi.post('/login', {
        email: email,
        password: password,
      });
      //TODO put the token in the cookie
      return response.data;
    } catch (error) {
      // handle error
      return error
    }
  };


// create an axios instance with the auth API base URL

export {}