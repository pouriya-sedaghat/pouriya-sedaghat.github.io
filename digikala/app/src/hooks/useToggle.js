import { useState } from "react";
export const useToggle = (inisial) => {
    const [toggle, setToggle] = useState(inisial);
    const changeToggle = () => {
        setToggle(prevState => !prevState);
    }
    return [toggle, changeToggle, setToggle];
}