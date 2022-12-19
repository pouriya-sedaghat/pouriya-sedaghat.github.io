import { Container, Row, Col } from 'reactstrap';
import MySlider from './../../base/MySlider';
import Lists from './../../base/Lists';
import SlidMenu from './../../base/SlidMenu';
import OffProduction from './../../base/OffProduction';
import BestRequests from './../../base/BestRequests';
import GroupLists from './../../base/GroupLists';
import Tablighat from './../../base/Tablighat';
import PishnahadDigikala from './../../base/PishnahadDigikala';
import DigiBrands from './../../base/DigiBrands';
import Kala from './../../base/Kala';
import DigiPlus from './../../base/DigiPlus';
import DigiClub from './../../base/DigiClub';
import MyKala from './../../base/MyKala';
import BestKala from './../../base/BestKala';
import Takhfif from './../../base/Takhfif';
import Khandani from './../../base/Khandani';
const Home = () => {
    return (
        <>
            <MySlider listSlid={['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.gif', 'pic5.jpg', 'pic6.jpg', 'pic7.jpg', 'pic8.jpg', 'pic9.gif']} />
            <Container className='my-4 content-two'>
                <Row className='my-2'>
                    <Col xs={12} className='d-flex flex-wrap flex-lg-nowrap justify-content-evenly align-items-lg-center align-content-center'>
                        <Lists />
                    </Col>
                </Row>
                <Row >
                    <Col xs={12} className='d-flex align-items-center position-relative bg-danger rounded-4 p-0 overflow-hidden'>
                        <SlidMenu picList={['amazing.svg', 'box.png', 'img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg', 'img6.jpg', 'img7.jpg', 'img8.jpg', 'img9.jpg', 'img10.jpg', 'img11.jpg', 'img12.jpg']} />
                    </Col>
                </Row>
                <Row className='my-3 rounded-4'>
                    <OffProduction myPic={['fresh.png', 'fresh.svg', 'myPic3.jpg', 'myPic4.jpg', 'myPic5.jpg', 'myPic6.jpg', 'myPic7.jpg', 'myPic8.jpg']} />
                </Row>
                <Row>
                    <BestRequests myImg={['myImg1.jpg', 'myImg2.jpg', 'myImg3.jpg', 'myImg4.jpg']} />
                </Row>
                <Row className='my-4 justify-content-center'>
                    <GroupLists Lists={['mylist1.png', 'mylist2.png', 'mylist3.png', 'mylist4.png', 'mylist5.png', 'mylist6.png', 'mylist7.png', 'mylist8.png', 'mylist9.png', 'mylist10.png', 'mylist11.png']} />
                </Row>
                <Row className='my-5'>
                    <Tablighat myPicMe={['picMe1.jpg', 'picMe.gif']} />
                </Row>
                <Row>
                    <PishnahadDigikala myItems={['item1.jpg', 'item2.jpg', 'item3.jpg', 'item4.jpg', 'item5.jpg', 'item6.jpg', 'item7.jpg', 'item8.jpg', 'item9.jpg', 'item10.jpg', 'item11.jpg', 'item12.jpg', 'item13.jpg', 'item14.jpg']} />
                </Row>
                <Row>
                    <DigiBrands items={['myItem1.png', 'myItem2.png', 'myItem3.png', 'myItem4.png', 'myItem5.png', 'myItem6.png', 'myItem7.jpg', 'myItem8.jpg', 'myItem9.png', 'myItem10.png', 'myItem11.png', 'myItem12.png', 'myItem13.jpg', 'myItem14.png', 'myItem15.jpg', 'myItem16.png', 'myItem17.png', 'myItem18.jpg', 'myItem19.png']} />
                </Row>
                <Row className='my-5'>
                    <Tablighat myPicMe={['picPic1.jpg', 'picPic2.jpg']} />
                </Row>
                <Row className='my-5 border rounded-4'>
                    <Kala MYPics={['MYPics1.jpg', 'MYPics2.jpg', 'MYPics3.jpg', 'MYPics4.jpg', 'MYPics5.jpg', 'MYPics6.jpg', 'MYPics7.jpg', 'MYPics8.jpg', 'MYPics9.jpg', 'MYPics10.jpg', 'MYPics11.jpg', 'MYPics12.jpg', 'MYPics13.jpg', 'MYPics14.jpg', 'MYPics15.jpg', 'MYPics16.jpg']} />
                </Row>
                <Row className='my-5 p-3 flex-wrap flex-lg-nowrap justify-content-evenly border rounded-4'>
                    <DigiPlus MYImgs={['MYImgs1.svg', 'MYImgs2.jpg', 'MYImgs3.jpg', 'MYImgs4.jpg', 'MYImgs5.jpg', 'MYImgs6.jpg', 'MYImgs7.jpg', 'MYImgs8.jpg', 'MYImgs9.jpg', 'MYImgs10.jpg', 'MYImgs11.jpg', 'MYImgs12.jpg', 'MYImgs13.jpg', 'MYImgs14.jpg']} />
                </Row>
                <Row className='my-5 rounded-4'>
                    <DigiClub bgs={['bg1.svg', 'bg2.jpg', 'bg3.png', 'bg4.png']} />
                </Row>
                <Row className='my-5 border rounded-4'>
                    <MyKala myBgs={['bgs1.jpg', 'bgs2.jpg', 'bgs3.jpg', 'bgs4.jpg', 'bgs5.jpg', 'bgs6.jpg', 'bgs7.jpg', 'bgs8.jpg', 'bgs9.jpg', 'bgs10.jpg', 'bgs11.jpg', 'bgs12.jpg', 'bgs13.jpg', 'bgs14.jpg', 'bgs15.jpg', 'bgs16.jpg']} />
                </Row>
                <Row className='my-5 p-3 border rounded-4'>
                    <BestKala MyBgs={['bggs1.jpg', 'bggs2.jpg', 'bggs3.jpg', 'bggs4.jpg', 'bggs5.jpg', 'bggs6.jpg', 'bggs7.jpg', 'bggs8.jpg', 'bggs9.jpg', 'bggs10.jpg', 'bggs11.jpg', 'bggs12.jpg','bggs13.jpg','bggs14.jpg','bggs15.jpg','bggs16.jpg','bggs17.jpg','bggs18.jpg']} />
                </Row>
                <Row className='my-5 border rounded-4'>
                    <Takhfif bgBgs={['bgBg1.jpg', 'bgBg2.jpg', 'bgBg3.jpg', 'bgBg4.jpg', 'bgBg5.jpg', 'bgBg6.jpg', 'bgBg7.jpg', 'bgBg8.jpg', 'bgBg9.jpg', 'bgBg10.jpg', 'bgBg11.jpg', 'bgBg12.jpg','bgBg13.jpg','bgBg14.jpg','bgBg15.jpg','bgBg16.jpg','bgBg17.jpg','bgBg18.jpg']} />
                </Row>
                <Row className='my-5'>
                    <Khandani forReading={['reading1.jpg', 'reading2.jpg', 'reading3.jpg', 'reading4.jpg']} />
                </Row>
            </Container>
        </>
    );
}
export default Home;