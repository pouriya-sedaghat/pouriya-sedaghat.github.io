import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
const TahvilType = ({ imgList }) => {
    return (
        <>
            <Row className='d-none d-lg-block'>
                <Col lg={12} className='d-flex justify-content-evenly align-items-center p-0'>
                    <div>
                        <Link to='/' className='d-flex flex-wrap justify-content-center overflow-hidden rounded-4'>
                            <img src={imgList[0]} alt='tahvil' className='img-fluig' />
                            <p className='w-100 text-center'>اﻣﮑﺎن ﺗﺤﻮﯾﻞ اﮐﺴﭙﺮس</p>
                        </Link>
                    </div>
                    <div>
                        <Link to='/' className='d-flex flex-wrap justify-content-center overflow-hidden rounded-4'>
                            <img src={imgList[1]} alt='emkan' className='img-fluig' />
                            <p className='w-100 text-center'>امکان پرداخت در محل</p>
                        </Link>
                    </div>
                    <div>
                        <Link to='/' className='d-flex flex-wrap justify-content-center overflow-hidden rounded-4'>
                            <img src={imgList[2]} alt='support' className='img-fluig' />
                            <p className='w-100 text-center'>۷ روز ﻫﻔﺘﻪ، ۲۴ ﺳﺎﻋﺘﻪ</p>
                        </Link>
                    </div>
                    <div>
                        <Link to='/' className='d-flex flex-wrap justify-content-center overflow-hidden rounded-4'>
                            <img src={imgList[3]} alt='zemanatBack' className='img-fluig' />
                            <p className='w-100 text-center'>هفت روز ضمانت بازگشت کالا</p>
                        </Link>
                    </div>
                    <div>
                        <Link to='/' className='d-flex flex-wrap justify-content-center overflow-hidden rounded-4'>
                            <img src={imgList[4]} alt='zemanat' className='img-fluig' />
                            <p className='w-100 text-center'>ﺿﻤﺎﻧﺖ اﺻﻞ ﺑﻮدن ﮐﺎﻟﺎ</p>
                        </Link>
                    </div>
                </Col>
            </Row>
        </>
    );
}
export default TahvilType;