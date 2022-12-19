import { Row, Col } from 'reactstrap';
const DownloadDigikalaApp = ({ thisPic }) => {
    return (
        <>
            <Row className='bg-primary mx-1 p-1 rounded-5 justify-content-center justify-content-lg-center my-5 my-lg-0 border-bottom'>
                <Col xs={7} sm={4} md={3} lg={2} className='d-flex justify-content-evenly align-items-center'>
                    <div className='w-25 p-1'><img src={thisPic[0]} alt='digi favico' className='img-fluid' /></div>
                    <div className='p-1'><b> دانلود اپلیکیشن دیجی‌کالا</b></div>
                </Col>
                <Col xs={8} sm={12} md={11} lg={9} className='d-flex flex-wrap justify-content-between align-items-center my-2'>
                    <div><a href='#' target='_blank' className='d-block mb-1 mb-sm-0'><img src={thisPic[1]} alt='google Play' className='img-fluid rounded-4' /></a></div>
                    <div><a href='#' target='_blank' className='d-block  mb-1 mb-sm-0'><img src={thisPic[2]} alt='coffe bazzar' className='img-fluid rounded-4' /></a></div>
                    <div><a href='#' target='_blank' className='d-block'><img src={thisPic[3]} alt='my ket' className='img-fluid rounded-4' /></a></div>
                    <div><a href='#' target='_blank' className='d-block'><img src={thisPic[4]} alt='sib app' className='img-fluid rounded-4' /></a></div>
                </Col>
                <Col lg={1} className='d-none d-lg-flex justify-content-center align-items-center'>
                    <div className='bg-white'><a href='#' target='_blank' className='d-block'><img src={thisPic[5]} alt='more' className='img-fluid' /></a></div>
                </Col>
                <Col xs={12} className='text-center overflow-hidden d-lg-none'>
                    <a href='#' target='_blank' className='d-block text-black rounded-5 text-decoration-none p-1'>اطلاعات بیشتر<i className='bi bi-chevron-left p-1'
                    ></i></a>
                </Col>
            </Row>
        </>
    );
}
export default DownloadDigikalaApp;