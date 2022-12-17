import { useState } from "react";
export const useOnChangeHandler = (initial) => {
    const [input, setInput] = useState(initial);
    const inputChange = (e) => {
        setInput(e.target.value);
    }
    return [input, inputChange, setInput];
}