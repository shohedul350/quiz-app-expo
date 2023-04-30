import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {setCredentials} from '../features/userSlice'

const url =  "http://192.168.1.111:5000"
// const url2 =  "http://jsonplaceholder.typicode.com"
// const url3 = ' http://82.180.139.31'


export const authServiceApi = createApi({
    reducerPath: 'authServiceApi',
    baseQuery: fetchBaseQuery({ 
        baseUrl: `${url}/api`,
        credentials: 'include',
        prepareHeaders: (headers, { getState }) => {
            const token = getState()?.auth?.token
            if (token) {
              headers.set('authorization', `Bearer ${token}`)
            }
        
            return headers
          },
    }),

    // const baseQueryWithReauth =async (args, api, extraOption)=>{
    //     let result   = await baseQuery(args, api, extraOption)
    //     if(result?.error?.originalStatus === 403){
        // api.dispatch( logout())
    //         logout()
    //     }
    // return result
    // },


    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: 'auth/login',
                method: 'POST',
                body: data,
            }),
            //new code
        //     transformResponse: (result) =>
        //     result,
        //   async onQueryStarted(args, { dispatch, queryFulfilled }) {
        //     try {
        //       const { data } = await queryFulfilled;
        //       dispatch(setCredentials({user: data?.user, token: data?.token}));
        //     } catch (error) {}
        //   },
          // end new code

        }),

        currentUser: builder.mutation({
            query: () => ({
                url: 'auth/me',
                method: 'GET',
            }),
        }),

        register: builder.mutation({
            query: (data) => ({
                url: 'auth/register',
                method: 'POST',
                body: data,
            }),
        }),

        registerToken: builder.mutation({
            query: (registerToken) => ({
                url: `auth/verify/${registerToken}`,
                method: 'GET',
            }),
        }),

        updateUser: builder.mutation({
            query: (data) => ({
                url: `auth/update/`,
                method: 'PUT',
                body: data,
            }),
        }),

        forgotPassword: builder.mutation({
            query: (data) => ({
                url: `auth/forgot-password`,
                method: 'POST',
                body: data,
            }),
        }),

        resetPassword: builder.mutation({
            query: ({ data, token }) => ({
                url: `auth/reset-password/${token}`,
                method: 'POST',
                body: data,
            }),
        }),

        changePassword: builder.mutation({
            query: (data) => ({
                url: `auth/change-password`,
                method: 'POST',
                body: data,
                // headers: { Authorization: token },
            }),
        }),
        testApi: builder.mutation({
            query: () => ({
                url: 'todos',
                method: 'GET'
            }),
        }),

    }),
});

export const {
    useLoginMutation,
    useCurrentUserMutation,
    useRegisterMutation,
    useRegisterTokenMutation,
    useUpdateUserMutation,
    useChangePasswordMutation,
    useForgotPasswordMutation,
    useResetPasswordMutation,
    useTestApiMutation
} = authServiceApi