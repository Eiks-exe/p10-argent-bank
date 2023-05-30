import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { Login } from '../service/userServiceApi'

const initialState = {
  loading: false,
  userInfo: {}, // for user object
  userToken: null, // for storing the JWT
  error: null,
  success: false, // for monitoring the registration process.
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {},
})

type TloginUser = {
    email: string,
    password: string
}


export const loginUser = createAsyncThunk(
  'auth/register',
  async ({email, password}: TloginUser, { rejectWithValue }) => {
    try {
        const response =  await Login(email, password)
    } catch(error) {

    }
  }
)

export default authSlice.reducer