import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const PasswordContentOne = ({ thisUserName, thisNewUserName, thisIsNewUser, myPic }) => {
    const { isMyuser } = useSelector(state => state.itsMyUser);
    return (
        <>
            <div>
                <div className='mx-auto w-75 py-4 px-5'>
                    <img src={`${myPic[0]}`} alt="welcome" className='img-fluid' />
                </div>
            </div>
            <div className='d-flex flex-wrap justify-content-center  text-center'>
                {thisIsNewUser ?
                    <>
                        <h6>{thisNewUserName.email || thisNewUserName.phone_number} به دیجی‌ کالا خوش آمدید</h6>
                        <p className='my-3'> حالا شما عضو دیجی‌کالا هستید و بیش از 8 میلیون کالای مختلف در دسترس شماست.</p>
                    </>
                    :
                    <>
                        <h6>{(thisUserName.first_name && thisUserName.last_name && thisUserName.first_name + ' ' + thisUserName.last_name) || thisUserName.phone_number || thisUserName.email} به دیجی‌ کالا خوش آمدید</h6>
                        <p className='my-3'>شما عضو دیجی‌کالا هستید و بیش از 8 میلیون کالای مختلف در دسترس شماست.</p>
                    </>
                }
                <Link to='/' className='d-block w-75 py-2 text-decoration-none rounded-5 bg-danger text-white'>بازگشت به صفحه اصلی</Link>
                <Link to={`/Accont${isMyuser.id}`} className='d-block w-75 py-2 text-danger text-decoration-none rounded-5'>ورود به حساب کاربری</Link>
            </div>
        </>
    );
}
export default PasswordContentOne;