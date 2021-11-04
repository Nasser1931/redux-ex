import { createSlice } from '@reduxjs/toolkit';

const loggedout = { name: "", age: 0, email: "" }
const userSlice = createSlice({
    name: "user",
    initialState: {
        value: { loggedout }
    },
    reducers: {
        login: (state, action) => {
            state.value = action.payload
        },

        logout: (state) => {
            state.value = loggedout
        }
    }

})

export const { login, logout } = userSlice.actions;
export default userSlice.reducer
