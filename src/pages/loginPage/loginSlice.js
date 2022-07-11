import { createSlice } from '@reduxjs/toolkit'

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
const { actions, reducer } = loginSlice
export const { logingPending, logingSuccess, logingError, logingOut } = actions
export default reducer
