import { useState } from "react";
export const useToggle = (initial) => {
    const [toggel, setToggel] = useState(initial);
    const changeToggel = () => {
        setToggel(prevState => !prevState);
    }
    return [toggel, changeToggel, setToggel];
} 