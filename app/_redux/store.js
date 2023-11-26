import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./user"
import signupReducer from "./signup"
import messagingReducer from "./messaging"

export default configureStore({
  reducer: {
    user: userReducer,
    signup: signupReducer,
    messaging: messagingReducer, 
  },
})
