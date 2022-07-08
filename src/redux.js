import { createSlice, configureStore } from '@reduxjs/toolkit'

const initialState = {
  isLoading: false,
  isAuth: false,
  error: '',
}

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    logingPending: (state) => {
      state.isLoading = true
    },
    logingSuccess: (state) => {
      state.isLoading = false
      state.isAuth = true
      state.error = ''
    },
    logingError: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },
    logingOut: (state) => {
      state.isAuth = false
    },
  },
})

export const { logingPending, logingSuccess, logingError, logingOut } =
  loginSlice.actions

export const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
  },
})
