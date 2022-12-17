import { Container } from 'reactstrap';
import Mode from './Mode';
const Header = () => {
    return (
        <>
            <Container fluid className='fixed-top'>
                <Mode />
            </Container>
            <Container fluid>
                <Mode />
            </Container>
        </>
    );
}
export default Header;