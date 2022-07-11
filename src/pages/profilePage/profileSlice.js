import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoading: false,
  firstName: '',
  lastName: '',
  error: '',
}

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    profilePending: (state) => {
      state.isLoading = true
    },
    profileFirstName: (state, action) => {
      state.isLoading = false
      state.firstName = action.payload
      state.error = ''
    },

    profileLastName: (state, action) => {
      state.isLoading = false
      state.lastName = action.payload
      state.error = ''
    },

    profileError: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },
  },
})
const { actions, reducer } = profileSlice
export const {
  profilePending,
  profileFirstName,
  profileLastName,
  profileError,
} = actions
export default reducer
