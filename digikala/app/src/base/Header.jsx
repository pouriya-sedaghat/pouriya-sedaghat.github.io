import { Container, Row, Col, Input } from 'reactstrap';
import { useToggle } from './../hooks/useToggle';
import { Random } from './../helpers/random';
import Modal from './Modal';
import ModalLocation from './ModalLocation';
import { useEffect, useState } from 'react';
import InfoModal from './InfoModal'
import { useSelector } from 'react-redux';
import TablighInHeader from './TablighInHeader';
import ContentMyHeader from './ContentMyHeader';
const Header = () => {
  const { city } = useSelector(state => state.location);
  const [random, setRandom] = useState(Random(1, 5));
  useEffect(() => {
    setInterval(() => { setRandom(Random(1, 5)); }, 5000);
  }, []);
  const [toggle, changeToggle, setToggle] = useToggle(true);
  const [myToggle, changeMyToggle, setMyToggle] = useToggle(true);
  const [infoToggle, changeInfoToggle, setInfoToggle] = useToggle(true);
  // const [city, setCity] = useState('لطفا شهر خود را انتخاب کنید'); --prodct by redux--
  return (
    <>
      <Container fluid className='bg-white custom-position'>
        <TablighInHeader thisRandom={`tabligh${random}`} thisPicRandom={[`link${random}.jpg`]} />

        <ContentMyHeader thisImg={['logo.svg']} myPic={['logo.svg']} thisChangeToggle={changeToggle} thisChangeInfoToggle={changeInfoToggle} thisCity={city} thisMyImg={['ronix.jpg']} thisChangeMyToggle={changeMyToggle} />
      </Container>
      {
        toggle ? '' :
          <Modal setValue={setToggle} />
      }
      {
        myToggle ? '' :
          <ModalLocation setValue={setMyToggle} />
      }
      {
        infoToggle ? '' :
          <InfoModal backHome={setInfoToggle} />
      }
    </>
  );

}

export default Header;