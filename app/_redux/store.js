import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./user"
import signupReducer from "./signup"
import produceReducer from "./produce"
import messagingReducer from "./messaging"

export default configureStore({
  reducer: {
    user: userReducer,
    signup: signupReducer,
    produce: produceReducer,
    messaging: messagingReducer,
  },
})
