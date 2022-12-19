import { Container } from 'reactstrap';
import { useToggle } from '../hooks/useToggle';
import FooterInfo from './FooterInfo';
import TahvilType from './TahvilType';
import FooterNavAndTab from './FooterNavAndTab';
import DownloadDigikalaApp from './DownloadDigikalaApp';
import AboutAndEnamad from './AboutAndEnamad';
import HoldingCompany from './HoldingCompany';
const Footer = () => {
    const [toggle, changeToggle, setTogggle] = useToggle(true);
    return (
        <>
            <Container fluid className='border-top custom-footer'>
                <FooterInfo thisImg={['digi.svg']} />

                <TahvilType imgList={['tahvil.svg', 'emkan.svg', 'support.svg', 'zemanatBack.svg', 'zemanat.svg']} />

                <FooterNavAndTab />

                <DownloadDigikalaApp thisPic={['digiapp.png', 'googlePlay.svg', 'bazzar.svg', 'myket.svg', 'sibApp.svg', 'more.svg']} />

                <AboutAndEnamad thisToggle={toggle} thisChangeToggle={changeToggle} picList={['rezi.png', 'kasbokar.png', 'enamad.png']} />

                <HoldingCompany imageLists={['digimag.svg', 'digipay.svg', 'digistyle.svg', 'digiplus.svg', 'digiclub.svg', 'jet.svg', 'magnet.svg', 'digiMehr.svg', 'fidibo.svg', 'diginext.svg', 'pindo.svg', 'komodaa.svg', 'digiexpress.svg', 'ganjeh.svg', 'digify.svg', 'smartech.svg', 'digikala-business.svg']} />
            </Container>
        </>
    );
}
export default Footer;