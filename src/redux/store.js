import { configureStore } from "@reduxjs/toolkit";
import { authServiceApi } from "./services/authServiceApi";
import userReducer from './features/userSlice'

//persit our store
// import storage from "redux-persist/lib/storage";
import AsyncStorage from '@react-native-async-storage/async-storage'
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";

//reducers
const reducer = combineReducers({
    auth: userReducer,
    [authServiceApi.reducerPath]: authServiceApi.reducer,
});

const persistConfig = {
    key: "root",
    storage: AsyncStorage,
    blackList: [authServiceApi.reducerPath],
};

// // persist our store
const persistedReducer = persistReducer(persistConfig, reducer);

// creating the store
const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk, authServiceApi.middleware],
});

export default store;