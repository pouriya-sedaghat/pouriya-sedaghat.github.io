import { useCookies } from 'react-cookie';
import { useInputHandler } from 'hooks/useInputHandler';
import { Container, Row, Col, Button } from 'reactstrap';
import InputUser from 'base/InputUser';
import Paragraph from 'base/Paragraph';
const Home = () => {
    const [userName, , userNameHandler] = useInputHandler('');
    const [password, , passwordHandler] = useInputHandler('');
    const [cookies, setCookie] = useCookies(['name', 'password']);
    const handler = () => {
        setCookie('name', userName, { path: '/' });
        setCookie('password', password, { path: '/' });
    };
    console.log(cookies);
    return (
        <>
            <Container className='bg-dark text-light' fluid>
                <Row style={{ height: '100vh' }}>
                    <Col className='d-flex justify-content-center align-items-center' xs={5}>
                        <InputUser type={'name'} defaultVal={'UserName'} mount={userName} onChangeHandler={userNameHandler} />
                    </Col>
                    <Col className='d-flex justify-content-center align-items-center' xs={5}>
                        <InputUser type={'password'} defaultVal={'Password'} mount={password} onChangeHandler={passwordHandler} />
                    </Col>
                    <Col className='d-flex align-items-center' xs={2}>
                        <Button onClick={handler} className='w-50' color='success'>Send !</Button>
                    </Col>
                    <Col xs={12} className='px-5'>
                        <h3>result :</h3>
                        {cookies.name && <Paragraph role={'UserName Is'} value={cookies.name} />}
                        {cookies.password && <Paragraph role={'Password Is'} value={cookies.password} />}
                    </Col>
                </Row>
            </Container>
        </>
    );
}
export default Home;