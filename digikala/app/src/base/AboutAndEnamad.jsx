import { Row, Col } from 'reactstrap';
import MoreAbout from './MoreAbout';
const AboutAndEnamad = ({ thisToggle, thisChangeToggle, picList }) => {
    return (
        <>
            <Row className='justify-content-between mt-lg-5 p-4 border-top border-bottom'>
                <Col xs={12} lg={6}>
                    <div>
                        <b>فروشگاه اینترنتی دیجی‌کالا، بررسی، انتخاب و خرید آنلاین</b>
                        <p>یک خرید اینترنتی مطمئن، نیازمند فروشگاهی است که بتواند کالاهایی متنوع، باکیفیت و دارای قیمت مناسب را در مدت زمانی کوتاه به دست مشتریان خود برساند و ضمانت بازگشت کالا هم داشته باشد؛ ویژگی‌هایی که فروشگاه اینترنتی دیجی‌کالا سال‌هاست بر روی آن‌ها کار کرده و توانسته از این طریق مشتریان ثابت خود را داشته باشد.</p>
                        {thisToggle ? <span onClick={thisChangeToggle}><b className='p-1'>مشاهده بیشتر</b><i className='bi bi-chevron-left p-1'></i></span> :
                            <MoreAbout thisChangeToggle={thisChangeToggle} />
                        }
                    </div>
                </Col>
                <Col xs={12} lg={4} className='d-flex justify-content-center m-1'>
                    <div className='border rounded-3 m-1'><a href='#' target='_blank' className='d-block'><img src={picList[0]} alt='rezi' className='img-fluid' /></a></div>
                    <div className='border rounded-3 m-1'><a href='#' target='_blank' className='d-block'><img src={picList[1]} alt='kasbokar' className='d-block w-100' /></a></div>
                    <div className='border rounded-3 m-1'><a href='#' target='_blank' className='d-block'><img src={picList[2]} alt='e namad' className='img-fluid' /></a></div>
                </Col>
            </Row>
        </>
    );
}
export default AboutAndEnamad;