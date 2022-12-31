import { Input } from 'reactstrap';
const InputUser = ({ type, defaultVal, mount, onChangeHandler }) => {
    return (
        <>
            <label className='px-3' htmlFor={type}>Enter Your Password :</label>
            <Input className='w-50' value={mount} placeholder={defaultVal} onChange={onChangeHandler} id={type} />
        </>
    );
}
export default InputUser;