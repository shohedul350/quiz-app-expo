import { createSlice } from '@reduxjs/toolkit';
import { authServiceApi } from '../services/authServiceApi';

const initialState = { user: 'emon', token: null};

const userSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        setCredentials : (state, action)=>{
            state.user = action.payload.user
            state.token = action.payload.token
        } ,
        logout : (state, action)=>{
            state.user = null,
            state.token = null
        } 
    },
    extraReducers: (builder) => {
        builder.addMatcher(authServiceApi.endpoints.login.matchFulfilled,
            (state, { payload }) => {
                state.token = payload?.token
                state.user = payload?.user
              }
            )
    }
});
export const { logout, setCredentials } = userSlice.actions;

export default userSlice.reducer;

export const selectCurrentAuth = (state) => state.auth
