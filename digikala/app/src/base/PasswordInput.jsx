const PasswordInput = ({ thisIsUser, thisValType, thisPassword, thisOnChangeHandlerPassword, thisToggle, thisSetValType, thisChangeToggle, thisInputRef, thisVal, thisOnChangeHandler }) => {
    return (
        <>
            {thisIsUser ?
                <div className='border border-info rounded-3 d-flex justify-content-center align-items-center my-3 overflow-hidden'>
                    <input type={`${thisValType}`} required value={thisPassword} onChange={thisOnChangeHandlerPassword} name='password' className='w-100 p-2 border-0 input-rend' />
                    {thisToggle ?
                        <i className="bi bi-eye-fill p-2" onMouseDown={() => thisSetValType('text')} onClick={thisChangeToggle}></i>
                        :
                        <i className="bi bi-eye-slash-fill p-2" onMouseDown={() => thisSetValType('password')} onClick={thisChangeToggle}></i>
                    }
                </div>
                :
                <input type='text' required ref={thisInputRef} value={thisVal} onChange={thisOnChangeHandler} name='phoneNumberOrEmail' className='w-100 rounded-3 border-info px-2 my-3' />
            }
        </>
    );
}
export default PasswordInput