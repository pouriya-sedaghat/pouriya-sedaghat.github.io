import { Row, Col } from 'reactstrap';
const HoldingCompany = ({ imageLists }) => {
    return (
        <>
            <Row>
                <Col xs={12} className="text-center py-5">
                    <p>برای استفاده از مطالب دیجی‌کالا، داشتن «هدف غیرتجاری» و ذکر «منبع» کافیست. تمام حقوق اين وب‌سايت نیز برای شرکت نوآوران فن آوازه (فروشگاه آنلاین دیجی‌کالا) است.</p>
                </Col>
                <Col xs={12} className='p-0 d-flex flex-wrap'>
                    <div>
                        <a href='#' target='_blank' className='w-100 h-100'>
                            <div><img src={imageLists[0]} alt='digimag' className='img-fluig' /></div>
                        </a>
                    </div>
                    <div>
                        <a href='#' target='_blank' className='w-100 h-100'>
                            <div><img src={imageLists[1]} alt='digipay' className='img-fluig' /></div>
                        </a>
                    </div>
                    <div>
                        <a href='#' target='_blank' className='w-100 h-100'>
                            <div><img src={imageLists[2]} alt='digistyle' className='img-fluig' /></div>
                        </a>
                    </div>
                    <div>
                        <a href='#' target='_blank' className='w-100 h-100'>
                            <div><img src={imageLists[3]} alt='digiplus' className='img-fluig' /></div>
                        </a>
                    </div>
                    <div>
                        <a href='#' target='_blank' className='w-100 h-100'>
                            <div className="text-center"><img src={imageLists[4]} alt='digiclub' className='img-fluig w-50' /></div>
                        </a>
                    </div>
                    <div>
                        <a href='#' target='_blank' className='w-100 h-100'>
                            <div><img src={imageLists[5]} alt='jet' className='img-fluig' /></div>
                        </a>
                    </div>
                    <div>
                        <a href='#' target='_blank' className='w-100 h-100'>
                            <div><img src={imageLists[6]} alt='magnet' className='img-fluig' /></div>
                        </a>
                    </div>
                    <div>
                        <a href='#' target='_blank' className='w-100 h-100'>
                            <div><img src={imageLists[7]} alt='digiMehr' className='img-fluig' /></div>
                        </a>
                    </div>
                    <div>
                        <a href='#' target='_blank' className='w-100 h-100'>
                            <div><img src={imageLists[8]} alt='fidibo' className='img-fluig' /></div>
                        </a>
                    </div>
                    <div>
                        <a href='#' target='_blank' className='w-100 h-100'>
                            <div><img src={imageLists[9]} alt='diginext' className='img-fluig' /></div>
                        </a>
                    </div>
                    <div>
                        <a href='#' target='_blank' className='w-100 h-100'>
                            <div><img src={imageLists[10]} alt='pindo' className='img-fluig' /></div>
                        </a>
                    </div>
                    <div>
                        <a href='#' target='_blank' className='w-100 h-100'>
                            <div><img src={imageLists[11]} alt='komodaa' className='img-fluig' /></div>
                        </a>
                    </div>
                    <div>
                        <a href='#' target='_blank' className='w-100 h-100'>
                            <div><img src={imageLists[12]} alt='digiexpress' className='img-fluig' /></div>
                        </a>
                    </div>
                    <div>
                        <a href='#' target='_blank' className='w-100 h-100'>
                            <div><img src={imageLists[13]} alt='ganjeh' className='img-fluig' /></div>
                        </a>
                    </div>
                    <div>
                        <a href='#' target='_blank' className='w-100 h-100'>
                            <div><img src={imageLists[14]} alt='digify' className='img-fluig' /></div>
                        </a>
                    </div>
                    <div>
                        <a href='#' target='_blank' className='w-100 h-100'>
                            <div><img src={imageLists[15]} alt='smartech' className='img-fluig' /></div>
                        </a>
                    </div>
                    <div>
                        <a href='#' target='_blank' className='w-100 h-100'>
                            <div className='text-center'><img src={imageLists[16]} alt='digikala business' className='img-fluig w-75' /></div>
                        </a>
                    </div>
                </Col>
            </Row>
        </>
    );
}
export default HoldingCompany;