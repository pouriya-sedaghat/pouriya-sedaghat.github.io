import { Col } from 'reactstrap';
const Khandani = ({ forReading }) => {
    return (
        <>
            <Col xs={12} className='py-2 px-2'>
                <b>خواندنی</b>
            </Col>
            <Col xs={12} className='p-0 d-flex flex-wrap flex-lg-nowrap justify-content-between align-items-center'>
                <Col xs={12} md={6} lg={3} className='p-2'>
                    <a href="#" target='_blank' className=' rounded-3 overflow-hidden d-block text-decoration-none border'>
                        <div className='mx-auto'><img src={forReading[0]} alt="atoms" className='img-fluid' /></div>
                        <div className='d-flex align-items-center'><p className='px-2'>چگونه می‌توان از اتم‌ها عکس‌برداری کرد؟</p></div>
                    </a>
                </Col>
                <Col xs={12} md={6} lg={3} className='p-2'>
                    <a href="#" target='_blank' className=' rounded-3 overflow-hidden d-block text-decoration-none border'>
                        <div className='mx-auto'><img src={forReading[1]} alt="car" className='img-fluid' /></div>
                        <div className='d-flex align-items-center'><p className='px-2'>هوندا آکورد ۲۰۲۳ معرفی شد؛ رقیبی برای تویوتا کمری</p></div>
                    </a>
                </Col>
                <Col xs={12} md={6} lg={3} className='p-2'>
                    <a href="#" target='_blank' className=' rounded-3 overflow-hidden d-block text-decoration-none border'>
                        <div className='mx-auto'><img src={forReading[2]} alt="dampbel" className='img-fluid' /></div>
                        <div className='d-flex align-items-center'><p className='px-2'>بررسی کابل USB-C باسئوس Legend Series Elbow؛ مناسب گیمرها</p></div>
                    </a>
                </Col>
                <Col xs={12} md={6} lg={3} className='p-2'>
                    <a href="#" target='_blank' className=' rounded-3 overflow-hidden d-block text-decoration-none border'>
                        <div className='mx-auto'><img src={forReading[3]} alt="space ship" className='img-fluid' /></div>
                        <div className='d-flex align-items-center'><p className='px-2'>مأموریت فضاپیمای محرمانه‌ی آمریکا پس از ۶ ماه به پایان رسید</p></div>
                    </a>
                </Col>
            </Col>
        </>
    );
}
export default Khandani;