import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';
const GroupLists = ({ Lists }) => {
    return (
        <>
            <Col xs={12} className='p-0 text-center'><b>دسته‌بندی‌های دیجی‌کالا</b></Col>
            <Col xs={12} lg={6} className='p-0 d-flex justify-content-between align-items-center'>
                <div>
                    <Link to="/" className="d-block text-decoration-none">
                        <div><img src={Lists[0]} alt="کالای دیجیتال" className="img-fluid" /></div>
                        <div><p>کالای دیجیتال</p></div>
                    </Link>
                </div>
                <div>
                    <Link to="/" className="d-block text-decoration-none">
                        <div><img src={Lists[1]} alt="موبایل" className="img-fluid" /></div>
                        <div><p>موبایل</p></div>
                    </Link>
                </div>
                <div>
                    <Link to="/" className="d-block text-decoration-none">
                        <div><img src={Lists[2]} alt="خودرو , ابزار و تجهیزات صنعتی" className="img-fluid" /></div>
                        <div><p>خودرو , ابزار و تجهیزات صنعتی</p></div>
                    </Link>
                </div>
            </Col>
            <Col xs={12} lg={6} className='p-0 d-flex justify-content-between align-items-center'>
                <div>
                    <Link to="/" className="d-block text-decoration-none">
                        <div><img src={Lists[3]} alt="مد و پوشاک" className="img-fluid" /></div>
                        <div><p>مد و پوشاک</p></div>
                    </Link>
                </div>
                <div>
                    <Link to="/" className="d-block text-decoration-none">
                        <div><img src={Lists[4]} alt="کالا های سوپر مارکتی" className="img-fluid" /></div>
                        <div><p>کالا های سوپر مارکتی</p></div>
                    </Link>
                </div>
                <div>
                    <Link to="/" className="d-block text-decoration-none">
                        <div><img src={Lists[5]} alt="اسباب بازی , کودک و نوزاد" className="img-fluid" /></div>
                        <div><p>اسباب بازی , کودک و نوزاد</p></div>
                    </Link>
                </div>
            </Col>
            <Col xs={12} lg={6} className='p-0 d-flex justify-content-between align-items-center'>
                <div>
                    <Link to="/" className="d-block text-decoration-none">
                        <div><img src={Lists[6]} alt="محصولات بومی و محلی" className="img-fluid" /></div>
                        <div><p>محصولات بومی و محلی</p></div>
                    </Link>
                </div>
                <div>
                    <Link to="/" className="d-block text-decoration-none">
                        <div><img src={Lists[7]} alt="زیلایی و سلامت" className="img-fluid" /></div>
                        <div><p>زیلایی و سلامت</p></div>
                    </Link>
                </div>
                <div>
                    <Link to="/" className="d-block text-decoration-none">
                        <div><img src={Lists[8]} alt="محصولات آشپزخانه" className="img-fluid" /></div>
                        <div><p>محصولات آشپزخانه</p></div>
                    </Link>
                </div>
            </Col>
            <Col xs={12} lg={4} className='p-0 d-flex justify-content-center justify-content-lg-between align-items-center'>
                <div>
                    <Link to="/" className="d-block text-decoration-none">
                        <div><img src={Lists[9]} alt="کتاب , لوازم و تحریر" className="img-fluid" /></div>
                        <div><p>کتاب , لوازم و تحریر</p></div>
                    </Link>
                </div>
                <div>
                    <Link to="/" className="d-block text-decoration-none">
                        <div><img src={Lists[10]} alt="ورزش و سفر" className="img-fluid" /></div>
                        <div><p>ورزش و سفر</p></div>
                    </Link>
                </div>
            </Col>
        </>
    );
}
export default GroupLists;