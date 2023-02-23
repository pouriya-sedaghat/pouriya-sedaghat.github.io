import { Container, Row, Col } from 'reactstrap';

function Header() {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col xs={12} className='p-0'>
                        <ul className='text-secondary bg-light p-0 m-0 d-flex justify-content-around'>
                            <li>Header Content 1</li>
                            <li>Header Content 2</li>
                            <li>Header Content 3</li>
                            <li>Header Content 4</li>
                            <li>Header Content 5</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Header;