import { Link } from 'react-router-dom';
const WithOutTimer = ({thisSetOpenTimer}) => {
    return (
        <>
            <Link onClick={() => thisSetOpenTimer(true)} className='text-info my-4 d-block'>
                <p className='mx-1'>ورود با رمز یکبار مصرف</p>
                <i className='bi bi-chevron-left mx-1'></i>
            </Link>
            <Link onClick={() => thisSetOpenTimer(true)} className='text-info my-4 d-block'>
                <p className='mx-1'>فراموشی رمز عبور</p>
                <i className='bi bi-chevron-left mx-1'></i>
            </Link>
        </>
    );
}
export default WithOutTimer;