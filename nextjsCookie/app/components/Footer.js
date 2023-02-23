import { Container, Row, Col } from 'reactstrap';

function Footer() {
    return (
        <>
            <Container fluid className='p-0'>
                <Row>
                    <Col xs={12}>
                        <ul className='text-secondary bg-light p-0 m-0 fixed-bottom d-flex justify-content-around'>
                            <li>Footer Content 1</li>
                            <li>Footer Content 2</li>
                            <li>Footer Content 3</li>
                            <li>Footer Content 4</li>
                            <li>Footer Content 5</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Footer;