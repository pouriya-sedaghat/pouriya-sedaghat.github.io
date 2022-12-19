import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
const FooterInfo = ({ thisImg }) => {
    return (
        <>
            <Row className='py-4'>
                <Col xs={12} className='d-flex flex-wrap justify-content-between align-content-center'>
                    <div className='align-self-center'>
                        <Link to='/' className='d-block'><img src={thisImg[0]} alt='digikala persion logo' className='img-fluid' /></Link>
                    </div>
                    <div className='align-self-center py-1'>
                        <a href='#navigation' className='text-decoration-none lh-lg p-2'>
                            <p className='px-1'>بازگشت به بالا</p><i className='bi bi-chevron-up px-1'></i>
                        </a>
                    </div>
                    <div className='w-100 my-2 '>
                        <p>تلفن پشتیبانی ۶۱۹۳۰۰۰۰ - ۰۲۱&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم</p>
                    </div>
                </Col>
            </Row>
        </>
    );
}
export default FooterInfo;