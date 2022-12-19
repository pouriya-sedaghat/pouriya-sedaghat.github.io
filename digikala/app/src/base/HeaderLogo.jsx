import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const HeaderLogo = ({ thisImg }) => {
    const { trueOrfalse } = useSelector(state => state.itsMyUser);
    const hideOrShow = (state) => {
        if (state) {
            return 'd-none';
        }
    }
    return (
        <>
            <div className='d-flex align-items-center custom-width'>
                <div className='d-lg-block d-none logo-size'><Link to='/'><img src={thisImg[0]} alt='logo' className='img-fluid' /></Link></div>
                <div className='w-100 bg-light rounded-4 d-flex align-items-center mx-lg-0 mx-3 '>
                    <label htmlFor='icon' className='pe-1 ps-3 py-2 d-flex align-items-center'>
                        <i className='bi bi-search text-secondary size'></i>
                    </label>
                    <input type={'text'} placeholder='جستجو' className='w-100 border-0 px-1 bg-transparent bg-input' id='icon' />
                </div>
            </div>
            <div className='d-flex justify-content-center align-items-center mx-3'>
                <div>
                    <Link to='/Login' className='d-flex justify-content-between align-items-center text-decoration-none text-black border border-secondary rounded-2 mx-lg-0 mx-2 px-1 py-1'>
                        <i className={`bi bi-box-arrow-in-left px-1 custom-icon ${hideOrShow(trueOrfalse) || ''}`}></i>
                        <i className={`bi bi-person-fill px-1 custom-icon ${hideOrShow(!trueOrfalse) || ''}`}></i>
                        <p className={`fw-bold px-1 font-size ${hideOrShow(trueOrfalse) || ''}`}><span>ورود</span> <span className='d-lg-inline d-none'>|</span> <span className='d-lg-inline d-none'>ثبت نام</span></p>
                    </Link>
                </div>
                <span className='mx-3 text-secondray opacity-50 d-lg-inline d-none custom-hSpan'>|</span>
                <div><Link to='/' className='mx-lg-0 mx-2 d-block w-auto py-2 mb-1'><i className="bi bi-cart text-decoration-none text-black custom-icon"></i></Link></div>
            </div>
        </>
    );
}
export default HeaderLogo;