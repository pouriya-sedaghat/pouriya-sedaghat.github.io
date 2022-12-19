import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
const TablighInHeader = ({ thisPicRandom, thisRandom }) => {
    return (
        <>
            <Row>
                <Col md={12} className='p-0'>
                    <Link to='/'>
                        <img src={thisPicRandom[0]} alt={thisRandom} className='img-fluid' />
                    </Link>
                </Col>
            </Row>
        </>
    );
}
export default TablighInHeader;