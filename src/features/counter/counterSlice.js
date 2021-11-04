import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
    },
    reducers: {
        increment: (state) => {
            state.value += 1
            console.log("payload is: " + state.value)
        },
        decremnet: (state) => {
            state.value -= 1
            console.log("payload is: " + state.value)
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
            console.log("payload is: " + action.payload)
        },
    }
})

export const { increment, decremnet, incrementByAmount } = counterSlice.actions
export default counterSlice.reducer