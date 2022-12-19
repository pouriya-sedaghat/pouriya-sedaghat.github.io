import { Row, Col } from 'reactstrap';
import HeaderLogo from './HeaderLogo';
import HeaderLogoToMd from './HeaderLogoToMd';
import HeaderCityToMd from './HeaderCityToMd';
import HeaderMenu from './HeaderMenu';
const ContentMyHeader = ({ thisImg, myPic, thisChangeToggle, thisChangeInfoToggle, thisCity, thisMyImg, thisChangeMyToggle }) => {
    return (
        <>
            <Row>
                <Col md={12} className='d-flex justify-content-between align-items-center order-last order-lg-0 p-0 custom-height'>
                    <HeaderLogo thisImg={thisImg} />
                </Col>
                <Col md={12} className='p-0 px-3 d-flex justify-content-between align-items-center d-lg-none custom-h-navi'>
                    <HeaderLogoToMd myPic={myPic} thisChangeToggle={thisChangeToggle} thisChangeInfoToggle={thisChangeInfoToggle} />
                </Col>
                <Col md={12} className='p-0 px-3 d-flex justify-content-between align-items-center d-lg-none order-last custom-h-nav' onClick={thisChangeMyToggle}>
                    <HeaderCityToMd thisCity={thisCity} />
                </Col>
                <Col md={12} className='p-0 d-none d-lg-flex'>
                    <HeaderMenu thisMyImg={thisMyImg} thisChangeMyToggle={thisChangeMyToggle} thisCity={thisCity} />
                </Col>
            </Row>
        </>
    );
}
export default ContentMyHeader;