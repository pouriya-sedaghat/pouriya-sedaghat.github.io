import { Link } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { THIS_USER, SELECT_STATE } from './../redux/slices/selectUser';
const SubmitOrRecepte = ({ thisUsers, thisIsUser, thisDisabled, thisVal, thisSetIsValid, thisSetValid, thisSetIsUser, thisSetUserName, thisSetDisabled, thisSetNewUserName, thisGetUsers, thisSetIsNewUser, thisPassword, thisOTP, thisSetpass, thisSetOTP, thisGeneratePassword, thisSetPassword }) => {
    const dispatcher = useDispatch();
    const save = () => {
        if (!thisVal.trim()) {
            alert('ye chi bzn namoosan !');
            return;
        }
        if (thisVal.length < 8) {
            thisSetValid('شماره موبایل یا ایمیل نادرست است.');
            thisSetIsValid(true);
            return;
        }
        else {
            thisSetValid('در حال بررسی ...');
            thisSetIsValid(false);
        }
        const howUser = thisUsers.find((user) => user.phone_number === thisVal || user.email === thisVal);
        if (howUser) {
            thisSetIsUser(true);
            dispatcher(THIS_USER(howUser));
        }
        else {
            let checkVal = thisVal.indexOf('@') + 1;
            checkVal ? setUsers_email(thisVal) : setUsers_phone(thisVal)
        }
        const myUserName = thisUsers.find((user) => user.phone_number === thisVal || user.email === thisVal);
        thisSetUserName(myUserName || '');
    }
    const setUsers_phone = async (phone_number) => {
        try {
            thisSetDisabled(true)
            const { data } = await axios({ url: 'http://localhost:8080/users', method: 'POST', data: { phone_number } })
            thisSetNewUserName(data);
            thisSetDisabled(false);
            thisGetUsers();
            thisSetIsUser(true);
            thisSetIsNewUser(true);
        } catch (erorr) { console.log(erorr) }
    }
    const setUsers_email = async (email) => {
        try {
            thisSetDisabled(true)
            const { data } = await axios({ url: 'http://localhost:8080/users', method: 'POST', data: { email } })
            thisSetNewUserName(data);
            thisSetDisabled(false);
            thisGetUsers();
            thisSetIsUser(true);
            thisSetIsNewUser(true);
        } catch (erorr) { console.log(erorr) }
    }
    const checkPass = () => {
        if (!thisPassword.trim()) {
            alert('pass bzn namoosan !');
            return;
        }
        if (thisPassword.length < 8) {
            alert('رمز عبور معتبر نیست.');
            return;
        }
        const isPasword = thisUsers.find((user) => (user.phone_number === thisVal || user.email === thisVal) && user.password === thisPassword) || thisOTP === thisPassword;
        if (isPasword) {
            thisSetpass(true);
            dispatcher(SELECT_STATE(true));
        }
        else {
            alert('رمز اشتباه است , مجدد تلاش کنید.');
            dispatcher(SELECT_STATE(false));
            thisSetpass(false);
            thisSetOTP(thisGeneratePassword('mix', 9));
        }
        thisSetPassword('');
    }
    return (
        <>
            <div className='my-3 mx-2'>
                {thisIsUser ?
                    <input type="submit" value='تایید' name='save' onClick={checkPass} className='w-100 bg-danger border-0 rounded-3 text-white' /> :
                    <>
                        <input type="submit" value='ورود' name='save' disabled={thisDisabled} onClick={save} className='w-100 bg-danger border-0 rounded-3 text-white my-1' />
                        <p className='mx-2'>
                            <span>ورود شما به معنای پذیرش</span> <Link to='/' className='text-info text-decoration-none'>شرایط دیجی‌کالا</Link> و <Link to='/' className='text-info text-decoration-none'>قوانین حریم‌ خصوصی</Link> <span>است.</span>
                        </p>
                    </>
                }
            </div>
        </>
    );
}
export default SubmitOrRecepte;