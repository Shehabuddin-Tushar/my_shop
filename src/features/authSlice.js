import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";
import axios from "axios";
import { toast } from "react-toastify";
const initialState = {
    token: localStorage.getItem("token"),
    name: "",
    email: "",
    _id: "",
    registerStatus: "",
    registerError: "",
    loginStatus: "",
    loginError: "",
    userLoaded: false,
};

export const registerUser = createAsyncThunk(
    "auth/registerUser",
    async (values, { rejectWithValue }) => {
    
        try {
            const token = await axios.post(`http://localhost:8080/user/api/register`, {
                name: values.name,
                email: values.email,
                password: values.password,
                password_confirmation:values.password_confirmation
            });
            console.log(token);
            localStorage.setItem("token", token.data);

            return token.data;
        } catch (error) {
            console.log(error.response.data);
            return rejectWithValue(error.response.data);
        }
    }
);

export const loginUser = createAsyncThunk(
    "auth/loginUser",
    async (values, { rejectWithValue }) => {
        try {
            const token = await axios.post(`http://localhost:8080/user/api/login`, {
                email: values.email,
                password: values.password,
            });

            localStorage.setItem("token", token.data);
            return token.data;
        } catch (error) {
            console.log(error.response);
            return rejectWithValue(error.response.data);
        }
    }
);

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loadUser(state, action) {
            const token = state.token;

            if (token) {
                const user = jwtDecode(token);
                return {
                    ...state,
                    token,
                    name: user.name,
                    email: user.email,
                    _id: user._id,
                    userLoaded: true,
                };
            } else return { ...state, userLoaded: true };
        },
        logoutUser(state, action) {
            localStorage.removeItem("token");

            return {
                ...state,
                token: "",
                name: "",
                email: "",
                _id: "",
                registerStatus: "",
                registerError: "",
                loginStatus: "",
                loginError: "",
            };
        },
    },
    extraReducers: (builder) => {
        builder.addCase(registerUser.pending, (state, action) => {
            return { ...state, registerStatus: "pending" };
        });
        builder.addCase(registerUser.fulfilled, (state, action) => {
            if (action.payload) {
                const user = jwtDecode(action.payload);
                toast.success("Register successfully", {
                    position: "bottom-left",
                });
                return {
                    ...state,
                    token: action.payload,
                    name: user.name,
                    email: user.email,
                    _id: user._id,
                    registerStatus: "success",
                };
            } else return state;
        });
        builder.addCase(registerUser.rejected, (state, action) => {
            return {
                ...state,
                registerStatus: "rejected",
                registerError: action.payload,
            };
        });
        builder.addCase(loginUser.pending, (state, action) => {
            return { ...state, loginStatus: "pending" };
        });

        builder.addCase(loginUser.fulfilled, (state, action) => {
            if (action.payload) {
                const user = jwtDecode(action.payload);
                toast.success("login successfully", {
                    position: "bottom-left",
                });
                return {
                    ...state,
                    token: action.payload,
                    name: user.name,
                    email: user.email,
                    _id: user._id,
                    loginStatus: "success",
                };
            } else return state;
        });
        builder.addCase(loginUser.rejected, (state, action) => {
            return {
                ...state,
                loginStatus: "rejected",
                loginError: action.payload,
            };
        });
    }
})

export const {loadUser,logoutUser} = authSlice.actions

export default authSlice.reducer