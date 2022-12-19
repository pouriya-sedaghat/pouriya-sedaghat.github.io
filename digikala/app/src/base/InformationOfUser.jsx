import { Container, Row, Col, Button, Table } from 'reactstrap';
const InformationOfUser = ({ thisInfoUser, thisEdit, thisDeleteAccont, thisUserId }) => {
    return (
        <>
            <Container className='mx-auto information-user'>
                <Row>
                    <Col xs={12}>
                        <div className='table-responsive'>
                            <Table bordered hover dark className='text-center border-success'>
                                <thead>
                                    <tr>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Password</th>
                                        <th>Phone Number</th>
                                        <th>Email</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{thisInfoUser.first_name || 'none'}</td>
                                        <td>{thisInfoUser.last_name || 'none'}</td>
                                        <td>{thisInfoUser.password || 'none'}</td>
                                        <td>{thisInfoUser.phone_number || 'none'}</td>
                                        <td>{thisInfoUser.email || 'none'}</td>
                                        <td>
                                            <Button color='outline-info' className='mx-1' onClick={thisEdit}>Edit</Button>
                                            <Button color='outline-danger' className='mx-1' onClick={() => thisDeleteAccont(thisUserId)}>Delete Accont</Button>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
export default InformationOfUser;