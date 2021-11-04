import { createSlice } from '@reduxjs/toolkit';

const initialColor = ""
const themeSlice = createSlice({
    name: "theme",
    initialState: {
        value: { initialColor }
    },
    reducers: {
        changeC: (state, action) => {
            state.value = action.payload
        },
    }

})

export const { changeC } = themeSlice.actions;
export default themeSlice.reducer
