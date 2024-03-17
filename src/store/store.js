import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";

const store = configureStore({
    reducer: {
        auth: authSlice,
        // TODO : (redux) post: postSlice, 
    }
})

export default store

// TODO : postSlice.js actions - state.allPosts, state.userPosts