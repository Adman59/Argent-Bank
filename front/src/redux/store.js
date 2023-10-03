import { configureStore } from "@reduxjs/toolkit";
import { loginReducer } from "@/redux/slices/loginSlice";
import { userReducer } from "@/redux/slices/userSlice";

export const store = configureStore({
    reducer: {
      login: loginReducer,
      user: userReducer
    }
  })