import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';
const DigiPlus = ({ MYImgs }) => {
    return (
        <>
            <Col xs={12} lg={4} className='bg-transparent py-4'>
                <div className='w-50'><img src={MYImgs[0]} alt="digi plus" className='img-fluid' /></div>
                <div className='py-3  text-light'><p>خدمات ویژه برای اعضای دیجی‌پلاس</p></div>
                <div className='w-25 text-center border border-light overflow-hidden rounded-5'><Link to='/' className='d-block p-2 text-decoration-none  text-light'><p className='mx-1 ms-lg-0 mx-xl-1'>عضویت</p><i className='bi bi-arrow-left mx-1 mx-lg-0 mx-xl-1'></i></Link></div>
            </Col>
            <Col xs={12} lg={4} className='m-0 me-lg-1 d-flex flex-wrap align-items-center bg-white'>
                <div className="w-100 py-2 d-flex justify-content-between align-items-center">
                    <div><i className="bi bi-cash mx-1"></i><b className='mx-1'>هدیه نقدی</b></div>
                    <div><Link to='/' className='text-decoration-none'>مشاهده همه</Link><i className='bi bi-chevron-left'></i></div>
                </div>
                <div className="w-100 py-2 d-flex justify-content-evenly align-items-center">
                    <div>
                        <Link to='/' className='d-block text-decoration-none position-relative'>
                            <div className='p-1'><img src={MYImgs[1]} alt="لادن" className='img-fluid' /></div>
                            <div className='position-absolute rounded-5 text-center'><p>7,308<sub>تومان</sub>هدیه</p></div>
                        </Link>
                    </div>
                    <div>
                        <Link to='/' className='d-block text-decoration-none position-relative'>
                            <div className='p-1'><img src={MYImgs[2]} alt="بیتا" className='img-fluid' /></div>
                            <div className='position-absolute rounded-5 text-center'><p>7,308<sub>تومان</sub>هدیه</p></div>
                        </Link>
                    </div>
                    <div>
                        <Link to='/' className='d-block text-decoration-none position-relative'>
                            <div className='p-1'><img src={MYImgs[3]} alt="زر ماکارون" className='img-fluid' /></div>
                            <div className='position-absolute rounded-5 text-center'><p>7,308<sub>تومان</sub>هدیه</p></div>
                        </Link>
                    </div>
                </div>
                <div className="w-100 py-2 d-flex justify-content-evenly align-items-center">
                    <div>
                        <Link to='/' className='d-block text-decoration-none position-relative'>
                            <div className='p-1'><img src={MYImgs[4]} alt="زر ماکارون" className='img-fluid' /></div>
                            <div className='position-absolute rounded-5 text-center'><p>7,308<sub>تومان</sub>هدیه</p></div>
                        </Link>
                    </div>
                    <div>
                        <Link to='/' className='d-block text-decoration-none position-relative'>
                            <div className='p-1'><img src={MYImgs[5]} alt="اویلا" className='img-fluid' /></div>
                            <div className='position-absolute rounded-5 text-center'><p>7,308<sub>تومان</sub>هدیه</p></div>
                        </Link>
                    </div>
                    <div>
                        <Link to='/' className='d-block text-decoration-none position-relative'>
                            <div className='p-1'><img src={MYImgs[6]} alt="زر ماکارون" className='img-fluid' /></div>
                            <div className='position-absolute rounded-5 text-center'><p>7,308<sub>تومان</sub>هدیه</p></div>
                        </Link>
                    </div>
                </div>
            </Col>
            <Col xs={12} lg={4} className='m-0 ms-lg-1 d-flex flex-wrap bg-white'>
                <div className="w-100 py-2 d-flex justify-content-between">
                    <div><i className="bi bi-clock-history mx-1"></i><b className='mx-1'>ارسال فوری</b></div>
                    <div><Link to='/' className='text-decoration-none'>مشاهده همه</Link><i className='bi bi-chevron-left'></i></div>
                </div>
                <div className="w-100 py-2 d-flex justify-content-evenly">
                    <div>
                        <Link to='/' className='d-block text-decoration-none'>
                            <img src={MYImgs[7]} alt="هندزفری" className='img-fluid' />
                        </Link>
                    </div>
                    <div>
                        <Link to='/' className='d-block text-decoration-none'>
                            <img src={MYImgs[8]} alt="ایفون" className='img-fluid' />
                        </Link>
                    </div>
                    <div>
                        <Link to='/' className='d-block text-decoration-none'>
                            <img src={MYImgs[9]} alt="خمیر دندلان" className='img-fluid' />
                        </Link>
                    </div>
                </div>
                <div className="w-100 py-2 d-flex justify-content-evenly">
                    <div>
                        <Link to='/' className='d-block text-decoration-none'>
                            <img src={MYImgs[10]} alt="هندزفری" className='img-fluid' />
                        </Link>
                    </div>
                    <div>
                        <Link to='/' className='d-block text-decoration-none'>
                            <img src={MYImgs[11]} alt="ایفون" className='img-fluid' />
                        </Link>
                    </div>
                    <div>
                        <Link to='/' className='d-block text-decoration-none'>
                            <img src={MYImgs[12]} alt="خودکار" className='img-fluid' />
                        </Link>
                    </div>
                </div>
            </Col>
        </>
    );
}
export default DigiPlus;