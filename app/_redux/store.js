import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./user"
import signupReducer from "./signup"

export default configureStore({
  reducer: {
    user: userReducer,
    signup: signupReducer
  },
})
