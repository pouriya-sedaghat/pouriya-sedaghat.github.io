import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';
const MyKala = ({ myBgs }) => {
    return (
        <>
            <Col xs={12} lg={3} className='p-3 pb-0 border-end'>
                <div>
                    <p>گوشی موبایل</p>
                    <small className='d-block text-secondary my-1'>بر اساس بازدیدهای شما</small>
                </div>
                <div>
                    <Link to='/' className='d-flex flex-wrap align-content-center'>
                        <div className='w-50 p-2 border-bottom border-end'><img src={myBgs[0]} className='img-fluid' alt="phone" /></div>
                        <div className='w-50 p-2 border-bottom'><img src={myBgs[1]} className='img-fluid' alt="phone" /></div>
                        <div className='w-50 p-2 border-end'><img src={myBgs[2]} className='img-fluid' alt="phone" /></div>
                        <div className='w-50 p-2'><img src={myBgs[3]} className='img-fluid' alt="phone" /></div>
                    </Link>
                </div>
                <div className=' text-center py-3'><Link to='/' className='text-decoration text-info px-3 py-1 rounded-4'><p className='mx-1'>مشاهده</p><i className='bi bi-chevron-left'></i></Link></div>
            </Col>
            <Col xs={12} lg={3} className='p-3 pb-0 border-end'>
                <div>
                    <p>کیف و کاور گوشی</p>
                    <small className='d-block text-secondary my-1'>بر اساس بازدیدهای شما</small>
                </div>
                <div>
                    <Link to='/' className='d-flex flex-wrap align-content-center'>
                        <div className='w-50 p-2 border-bottom border-end'><img src={myBgs[4]} className='img-fluid' alt="cover" /></div>
                        <div className='w-50 p-2 border-bottom'><img src={myBgs[5]} className='img-fluid' alt="cover" /></div>
                        <div className='w-50 p-2 border-end'><img src={myBgs[6]} className='img-fluid' alt="cover" /></div>
                        <div className='w-50 p-2'><img src={myBgs[7]} className='img-fluid' alt="cover" /></div>
                    </Link>
                </div>
                <div className=' text-center py-3'><Link to='/' className='text-decoration text-info px-3 py-1 rounded-4'><p className='mx-1'>مشاهده</p><i className='bi bi-chevron-left'></i></Link></div>
            </Col>
            <Col xs={12} lg={3} className='p-3 pb-0 border-end'>
                <div>
                    <p>هدفون، هدست و هندزفری</p>
                    <small className='d-block text-secondary my-1'>بر اساس بازدیدهای شما</small>
                </div>
                <div>
                    <Link to='/' className='d-flex flex-wrap align-content-center'>
                        <div className='w-50 p-2 border-bottom border-end'><img src={myBgs[8]} className='img-fluid' alt="headset" /></div>
                        <div className='w-50 p-2 border-bottom'><img src={myBgs[9]} className='img-fluid' alt="headset" /></div>
                        <div className='w-50 p-2 border-end'><img src={myBgs[10]} className='img-fluid' alt="headset" /></div>
                        <div className='w-50 p-2'><img src={myBgs[11]} className='img-fluid' alt="headset" /></div>
                    </Link>
                </div>
                <div className=' text-center py-3'><Link to='/' className='text-decoration text-info px-3 py-1 rounded-4'><p className='mx-1'>مشاهده</p><i className='bi bi-chevron-left'></i></Link></div>
            </Col>
            <Col xs={12} lg={3} className='p-3 pb-0'>
                <div>
                    <p>ساعت هوشمند</p>
                    <small className='d-block text-secondary my-1'>بر اساس بازدیدهای شما</small>
                </div>
                <div>
                    <Link to='/' className='d-flex flex-wrap align-content-center'>
                        <div className='w-50 p-2 border-bottom border-end'><img src={myBgs[12]} className='img-fluid' alt="smart watch" /></div>
                        <div className='w-50 p-2 border-bottom'><img src={myBgs[13]} className='img-fluid' alt="smart watch" /></div>
                        <div className='w-50 p-2 border-end'><img src={myBgs[14]} className='img-fluid' alt="smart watch" /></div>
                        <div className='w-50 p-2'><img src={myBgs[15]} className='img-fluid' alt="smart watch" /></div>
                    </Link>
                </div>
                <div className=' text-center py-3'><Link to='/' className='text-decoration text-info px-3 py-1 rounded-4'><p className='mx-1'>مشاهده</p><i className='bi bi-chevron-left'></i></Link></div>
            </Col>
        </>
    );
}
export default MyKala;