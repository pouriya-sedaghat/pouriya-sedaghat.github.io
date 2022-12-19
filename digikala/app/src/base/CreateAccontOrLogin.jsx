const CreateAccontOrLogin = ({ thisIsUser, thisIsNewUser, thisNewUserName }) => {
    return (
        <>
            <div>
                {thisIsUser ?
                    (thisIsNewUser ?
                        <>
                            <p className='mx-2 py-4'><b>کد تایید را وارد کنید!</b></p>
                            <p>حساب کاربری با این مشخصات {thisNewUserName.email || thisNewUserName.phone_number} وجود ندارد , برای ساخت حساب جدید کد تایید برای {thisNewUserName.email || thisNewUserName.phone_number} ارسال گردید.</p>
                        </>
                        :
                        <p className='mx-2 py-4'><b>رمز عبور را وارد کنید!</b></p>
                    )
                    :
                    (
                        <>
                            <p className='my-3'><b>ورود</b>&nbsp;<span>|</span>&nbsp;<b>ثبت نام</b></p>
                            <p className='d-block my-1'>سلام !</p>
                            <p>لطفا شماره موبایل یا ایمیل خود را وارد کنید</p>
                        </>
                    )
                }
            </div>
        </>
    );
}
export default CreateAccontOrLogin;