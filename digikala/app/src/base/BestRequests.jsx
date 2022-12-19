import { Col } from 'reactstrap';
const BestRequests = ({ myImg }) => {
    return (
        <>
            <Col lg={6} className='d-flex p-0 justify-content-center align-items-center'>
                <div className='rounded-4 m-1 m-lg-2 overflow-hidden'>
                    <a href='#' target='_blank' className='d-block'><img src={myImg[3]} className='img-fluid' alt="fresh" /></a>
                </div>
                <div className='rounded-4 m-1 m-lg-2 overflow-hidden'>
                    <a href='#' target='_blank' className='d-block'><img src={myImg[2]} className='img-fluid' alt="fresh" /></a>
                </div>
            </Col>
            <Col lg={6} className='d-flex p-0 justify-content-center align-items-center'>
                <div className='rounded-4 m-1 m-lg-2 overflow-hidden'>
                    <a href='#' target='_blank' className='d-block'><img src={myImg[1]} className='img-fluid' alt="fresh" /></a>
                </div>
                <div className='rounded-4 m-1 m-lg-2 overflow-hidden'>
                    <a href='#' target='_blank' className='d-block'><img src={myImg[0]} className='img-fluid' alt="fresh" /></a>
                </div>
            </Col>
        </>
    );
}
export default BestRequests;