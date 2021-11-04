import React from 'react';
import { useDispatch } from 'react-redux';
import { login, logout } from '../features/counter/user'

function Login() {
    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={() => {
                dispatch(login({ name: "Nasser", age: 24, email: "nasserbusaidi@gmail.com" }))
            }}>Login</button>
            <br />
            <button onClick={() => {
                dispatch(logout())
            }}>Logout</button>
        </div>

    )
}

export default Login;