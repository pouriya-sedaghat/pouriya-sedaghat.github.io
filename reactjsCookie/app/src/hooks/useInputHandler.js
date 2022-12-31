import { useState } from "react";
export const useInputHandler = (initial) => {
    const [value, setValue] = useState(initial);
    const valueHandler = (e) => {
        setValue(e.target.value);
    }
    return [value, setValue, valueHandler];
}