import {configureStore} from "@reduxjs/toolkit";
import AuthReducer from './features/authSilce';
export default configureStore({
    reducer:{
        auth:AuthReducer,
    },
})