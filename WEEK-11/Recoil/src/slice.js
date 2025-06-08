import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'login',
  initialState: {
    login:false
  },
  reducers: {
    login: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.login = true
    },
    logout: state => {
      state.login = false
    }
  }
})

export const { login, logout } = counterSlice.actions
export default counterSlice.reducer;



