import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { viewAccounts, addAccount, removeAccount } from './features/Accounts';

function ViewAccount() {
    const dispatch = useDispatch()
    const [profile, setProfile] = useState("")
    const theme = useSelector((state) => state.theme.value);
    const accounts = useSelector((state) => state.account.value);

    const deleteItem = (event) => {
        console.log(event.target.value)
        dispatch(removeAccount(event.target.value))
    }

    function handleRemove(index) {
        dispatch(removeAccount(index));
        // console.log(index)
    }
    return (

        <div div style={{ color: theme }}>

            <h1>All current users</h1>
            <ul>
                {
                    accounts.map((account, i) =>
                        <li
                            key={i}
                            id={account.id}
                            value={account.id}
                            onClick={() => handleRemove(account.id)}
                        >{account.id} -{account.name} - {account.mobile} </li>
                    )

                }
            </ul>

            <button onClick={() => {
                dispatch(viewAccounts())
            }}>Reset Profiles</button>
            <br />
            <input
                type="text"
                onChange={(event) => {
                    setProfile(event.target.value)
                }}
            />
            <button
                onClick={() => {
                    dispatch(addAccount(profile))
                }}>
                add profile</button>
        </div >
    )

}

export default ViewAccount;