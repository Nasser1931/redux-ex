import { createSlice } from '@reduxjs/toolkit';

let initialAccounts = [{ 'id': parseInt(Math.random() * 10), 'name': "payload", 'mobile': 5454545 }]
const accountsSlice = createSlice({
    name: "account",
    initialState: {
        value: []
    },
    reducers: {
        viewAccounts: (state) => {

            state.value = initialAccounts

        },
        addAccount: (state, { payload }) => {

            const newAccount = { 'id': parseInt(Math.random() * 10), 'name': payload, 'mobile': 5454545 }
            state.value.push(newAccount)


        },
        removeAccount: (state, { payload }) => {
            console.log("pay load is: " + payload)
            console.log(state)
            const ba = state.value.filter((values, payload) => payload !== values.id)
            console.log("ba is : " + ba)


        },

    }

})

export const { viewAccounts, addAccount, removeAccount } = accountsSlice.actions;
export default accountsSlice.reducer
