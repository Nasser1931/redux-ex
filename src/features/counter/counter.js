import React, { useState, setState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decremnet, increment, incrementByAmount } from "./counterSlice";



export function Counter() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    const [incNumber, setincNumber] = useState('100')

    { }
    return (
        <div>
            <div>
                <button onClick={() => dispatch(increment())}>
                    Increment
                </button>
                <br />
                <br />
                <span>{count}</span>
                <br />
                <br />
                <button onClick={() => dispatch(decremnet())}>
                    Decrement
                </button>
                <br />
                <input
                    aria-label="Set increment amount"
                    value={incNumber}
                    onChange={e => setincNumber(e.target.value)}
                />
                <button
                    onClick={() =>
                        dispatch(incrementByAmount(Number(incNumber) || 0))
                    }
                >by amount</button>
            </div>
        </div>
    )
}