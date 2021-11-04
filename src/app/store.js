import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import userReducer from '../features/counter/user'
import themeReducer from '../features/changeColor'
import accountReducer from '../features/Accounts'

export default configureStore({
    reducer: {
        counter: counterReducer,
        user: userReducer,
        theme: themeReducer,
        account: accountReducer,

    },
})