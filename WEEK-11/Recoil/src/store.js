import { configureStore } from "@reduxjs/toolkit"
import loginReducer from './slice.js'; // rename for clarity

const store = configureStore({
  reducer: {
    login: loginReducer
  }
});
export default store