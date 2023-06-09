import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Login, fetchUser, updateUser } from '../service/userServiceApi'
import { IUser } from '../interfaces'
import { useAppDispatch, useAppSelector } from '../app/hook';
import { useEffect, useState } from 'react';


const initialToken =
    window.localStorage.getItem('app_token') || window.sessionStorage.getItem('app_token') || undefined;
export interface UserState {
    user: IUser | undefined;
    token: string | undefined;
    status: 'auth' | 'loading' | 'guest' | 'error';
}


const initialState: UserState = {
    user: undefined,
    token: initialToken || undefined,
    status: initialToken ? 'auth' : 'guest',
};


type TloginUser = {
    email: string,
    password: string
    remember?: boolean
}

export const loginUser = createAsyncThunk(
    'user/login',
    async ({ email, password, remember }: TloginUser, { rejectWithValue }) => {

        const response = await Login(email, password)
        if (!response) throw new Error('Invalid email or password');
        if (typeof response != 'string') throw new Error('Invalid email or password');
        localStorage.setItem('userToken', response)
        return { response, remember };
    }
)

export const GetUserAsync = createAsyncThunk(
    'user/get',
    async ({ token }: { token?: string }) => {
        if (typeof token != 'string') throw new Error('invalid token');
        const response = await fetchUser(token);
        // The value we return becomes the `fulfilled` action payload
        return response as IUser;
    });

export const UpdateUserAsync = createAsyncThunk(
    'user/update',
    async ({ token, user }: { token?: string; user?: Partial<IUser> }) => {
        const response = await updateUser(token, user);
        // The value we return becomes the `fulfilled` action payload
        return response;
    },
);




const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.user = undefined;
            state.status = 'guest';
            window.localStorage.removeItem('app_token');
            window.sessionStorage.removeItem('app_token');
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.status = 'auth';
                if (typeof action.payload.response === 'string') {
                    state.token = action.payload.response;
                    if (action.payload.remember) {
                        window.localStorage.setItem('app_token', action.payload.response);
                    } else {
                        window.sessionStorage.setItem('app_token', action.payload.response);
                    }
                }

            })
            .addCase(loginUser.rejected, (state) => {
                state.status = 'error';
            })
            .addCase(GetUserAsync.fulfilled, (state, action) => {
                state.user = action.payload;
            })
            //Update
            .addCase(UpdateUserAsync.fulfilled, (state, action) => {
                state.user = action.payload;
            });
    }
})

export const { logout } = authSlice.actions;


export const useProfile = () => {
    const User = useAppSelector((state) => state.auth.user);
    const Token = useAppSelector((state) => state.auth.token);
    const dispatch = useAppDispatch();

    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    const updateProfile = async (user: IUser) => dispatch(UpdateUserAsync({ token: Token, user }));

    const [data, setData] = useState<IUser | undefined>(undefined);
    const [error, setError] = useState(undefined);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (Token && !User) {
            setLoading(true);
            dispatch(GetUserAsync({ token: Token }));
        } else if (Token && User) {
            setLoading(false);
            setData(User);
        }

        return () => {
            setData(undefined);
            setError(undefined);
            setLoading(false);
        };
    }, [Token, User, dispatch]);

    return { data, error, loading, updateProfile };
};


export const useAuthentificate = () => {
    const Token = useAppSelector((state) => state.auth.token);
    const Status = useAppSelector((state) => state.auth.status);
    const isAuthenticated = useAppSelector((state) => state.auth.status === 'auth');

    const dispatch = useAppDispatch();


    const Logout = () => {
        dispatch(logout());
    };

    const Login = async (email: string, password: string, remember?: boolean) =>
        dispatch(loginUser({ email, password, remember }));

    return {
        Token,
        Status,
        isAuthenticated,
        Logout,
        Login,
    };

};




export default authSlice.reducer