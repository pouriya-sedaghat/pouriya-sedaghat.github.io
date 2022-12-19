import { Container, Row, Col } from 'reactstrap';
import { useOnChangeHandler } from './../../hooks/useOnChangeHandler';
import { useRef } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useToggle } from '../../hooks/useToggle';
import { GeneratePassword } from './../../helpers/generatePassword';
import { useDispatch } from 'react-redux';
import { THIS_USER } from './../../redux/slices/selectUser';
import PasswordContentOne from './../../base/PasswordContentOne';
import LoginLogo from './../../base/LoginLogo';
import CreateAccontOrLogin from './../../base/CreateAccontOrLogin';
import PasswordInput from './../../base/PasswordInput';
import AboutPassword from './../../base/AboutPassword';
import SubmitOrRecepte from './../../base/SubmitOrRecepte';
const Login = () => {
    const [val, onChangeHandler, setval] = useOnChangeHandler('');
    const [users, setData] = useState([]);
    const [isUser, setIsUser] = useState(false);
    const [Valid, setValid] = useState('در حال بررسی ...');
    const [isValid, setIsValid] = useState(false);
    const [openTimer, setOpenTimer] = useState(false);
    const [userName, setUserName] = useState('');
    const [newUserName, setNewUserName] = useState('');
    const [refresh, setRefresh] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [pass, setpass] = useState(false);
    const [OTP, setOTP] = useState(GeneratePassword('mix', 9));
    const [toggle, changeToggle, setToggle] = useToggle(true);
    const [valType, setValType] = useState('password');
    const [isNewUser, setIsNewUser] = useState(false);
    const [password, onChangeHandlerPassword, setPassword] = useOnChangeHandler('');
    const dispatcher = useDispatch();
    const inputRef = useRef();
    useEffect(() => {
        setTimeout(() => {
            inputRef.current.focus();
        }, 1000);
        getUsers();
    }, []);
    const getUsers = () => {
        axios({ url: 'http://localhost:8080/users' })
            .then(({ data }) => {
                setData(data);
                dispatcher(THIS_USER(data.find((user) => user.phone_number === val || user.email === val)));
            })
            .catch((erorr) => { console.log(erorr) })
    }
    return (
        <>
            <Container className='login'>
                <Row className='justify-content-center'>
                    <Col xs={11} sm={7} lg={4} className='px-4 py-3 border rounded-5 my-5'>
                        {pass ?
                            <PasswordContentOne thisUserName={userName} thisNewUserName={newUserName} thisIsNewUser={isNewUser} myPic={['welcometodk.png']} />
                            :
                            <>
                                <LoginLogo myImg={['logo.svg']} thisIsUser={isUser} thisSetIsUser={setIsUser} />
                                <div>
                                    <CreateAccontOrLogin thisIsUser={isUser} thisIsNewUser={isNewUser} thisNewUserName={newUserName} />
                                    <div className='m-2'>
                                        <PasswordInput thisIsUser={isUser} thisValType={valType} thisPassword={password} thisOnChangeHandlerPassword={onChangeHandlerPassword} thisToggle={toggle} thisSetValType={setValType} thisChangeToggle={changeToggle} thisInputRef={inputRef} thisVal={val} thisOnChangeHandler={onChangeHandler} />
                                        <AboutPassword thisIsUser={isUser} thisIsNewUser={isNewUser} thisRefresh={refresh} thisSetRefresh={setRefresh} thisOTP={OTP} thisSetOTP={setOTP} thisGeneratePassword={GeneratePassword} thisOpenTimer={openTimer} thisSetOpenTimer={setOpenTimer} thisVal={val} thisIsValid={isValid} thisValid={Valid} />
                                    </div>
                                    <SubmitOrRecepte thisUsers={users} thisIsUser={isUser} thisDisabled={disabled} thisVal={val} thisSetIsValid={setIsValid} thisSetValid={setValid} thisSetIsUser={setIsUser} thisSetUserName={setUserName} thisSetDisabled={setDisabled} thisSetNewUserName={setNewUserName} thisGetUsers={getUsers} thisSetIsNewUser={setIsNewUser} thisPassword={password} thisOTP={OTP} thisSetpass={setpass} thisSetOTP={setOTP} thisGeneratePassword={GeneratePassword} thisSetPassword={setPassword} />
                                </div>
                            </>
                        }
                    </Col>
                </Row>
            </Container>
        </>
    );
}
export default Login;