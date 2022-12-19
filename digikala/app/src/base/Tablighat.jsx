import { Col } from 'reactstrap';
const Tablighat = ({ myPicMe }) => {
    return (
        <>

            <Col xs={12} className='d-md-flex alighn-items-center p-0'>
                <div className='mx-3 my-3 my-md-0 overflow-hidden rounded-4'><a href="#" target='_blank' className='d-block'><img src={myPicMe[0]} alt="item one" className='img-fluid' /></a></div>
                <div className='mx-3 my-3 my-md-0 overflow-hidden rounded-4'><a href="#" target='_blank' className='d-block'><img src={myPicMe[1]} alt="item two" className='img-fluid' /></a></div>
            </Col>
        </>
    );
}
export default Tablighat;