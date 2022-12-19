import { Container, Row, Col, Spinner } from 'reactstrap';
const MySpinner = () => {
    return (
        <>
            <Container fluid className='my-spinner'>
                <Row>
                    <Col xs={12}  className='d-flex justify-content-center'>
                        <Spinner color='primary'/>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
export default MySpinner;