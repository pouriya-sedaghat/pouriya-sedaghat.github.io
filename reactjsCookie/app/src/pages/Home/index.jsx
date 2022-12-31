import { useCookies } from 'react-cookie';
import { useInputHandler } from 'hooks/useInputHandler';
import { Container, Row, Col, Button } from 'reactstrap';
import InputUser from 'base/InputUser';
import Paragraph from 'base/Paragraph';
import swal from 'sweetalert';
const Home = () => {
    const [userName, setUserName, userNameHandler] = useInputHandler('');
    const [password, setPassword, passwordHandler] = useInputHandler('');
    const [cookies, setCookie] = useCookies(['name', 'password']);
    const handler = () => {
        if (userName === '' || userName.length <= 5) {
            swal('Failed !', 'UserName Is Invalid ;)', 'error');
            setUserName('');
            setPassword('');
            return;
        }
        else if (password === '' || password.length <= 5) {
            swal('Failed !', 'Password Is Invalid ;)', 'error');
            setUserName('');
            setPassword('');
            return;
        }
        else{
            swal('Good Job !', 'Do It ;)', 'success');
        }
        setCookie('name', userName, { path: '/' });
        setCookie('password', password, { path: '/' });
    };
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