import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeC } from "./features/changeColor";
export const Color = () => {
    const [color, setColor] = useState("")
    const dispatch = useDispatch();
    return (
        <div>
            <input
                type="text"
                onChange={(event) => {
                    setColor(event.target.value)
                }}
            />
            <button
                onClick={() => {
                    dispatch(changeC(color))
                }}>
                change color</button>
        </div>
    )
}

export default Color;
