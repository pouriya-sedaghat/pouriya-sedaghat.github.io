import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { counter } from '../helpers/counter';
import { useReducer } from 'react';
const PishnahadDigikala = ({ myItems }) => {
    const [myCounter, dispatchCounter] = useReducer(counter, { counter: 0 });
    const haidIco = () => {
        if ((myCounter.counter * 112) >= 336) {
            return 'd-none'
        }
    }
    const showIco = () => {
        if (myCounter.counter >= 1) {
            return 'd-inline'
        }
    }
    return (
        <>
            <Col xs={12} className='text-center p-0'><b>پیشنهاد دیجی‌کالا</b></Col>
            <Col xs={12} className='d-flex py-4 p-0 align-items-center position-relative overflow-hidden'>
                <i className={`bi bi-chevron-left ${haidIco() || ''} d-lg-none`} onClick={() => { dispatchCounter({ type: 'PLUS' }) }}></i>
                <i className={`bi bi-chevron-right ${showIco() || ''} d-lg-none`} onClick={() => { dispatchCounter({ type: 'MINUS' }) }}></i>
                <div style={{ marginRight: `${-myCounter.counter * 226}px` }}>
                    <div>
                        <Link to="/" className="d-block">
                            <div className='position-relative'>
                                <img src={myItems[0]} alt="گوشی مویابل" className='img-fluid' />
                                <div className='position-absolute w-100 h-100 rounded-circle'></div>
                            </div>
                            <div><p>گوشی مویابل</p></div>
                        </Link>
                    </div>
                    <div>
                        <Link to="/" className="d-block">
                            <div className='position-relative'>
                                <img src={myItems[1]} alt="کیف و کاور گوشی" className='img-fluid' />
                                <div className='position-absolute w-100 h-100 rounded-circle'></div>
                            </div>
                            <div><p>کیف و کاور گوشی</p></div>
                        </Link>
                    </div>
                </div>
                <div>
                    <div>
                        <Link to="/" className="d-block">
                            <div className='position-relative'>
                                <img src={myItems[2]} alt="هدفون , هدست و ..." className='img-fluid' />
                                <div className='position-absolute w-100 h-100 rounded-circle'></div>
                            </div>
                            <div><p>هدفون , هدست و ...</p></div>
                        </Link>
                    </div>
                    <div>
                        <Link to="/" className="d-block">
                            <div className='position-relative'>
                                <img src={myItems[3]} alt="ساعت هوشمند" className='img-fluid' />
                                <div className='position-absolute w-100 h-100 rounded-circle'></div>
                            </div>
                            <div><p>ساعت هوشمند</p></div>
                        </Link>
                    </div>
                </div>
                <div>
                    <div>
                        <Link to="/" className="d-block">
                            <div className='position-relative'>
                                <img src={myItems[4]} alt="لپ تاپ و الترابوک" className='img-fluid' />
                                <div className='position-absolute w-100 h-100 rounded-circle'></div>
                            </div>
                            <div><p>لپ تاپ و الترابوک</p></div>
                        </Link>
                    </div>
                    <div>
                        <Link to="/" className="d-block">
                            <div className='position-relative'>
                                <img src={myItems[5]} alt="جوراب مردانه" className='img-fluid' />
                                <div className='position-absolute w-100 h-100 rounded-circle'></div>
                            </div>
                            <div><p>جوراب مردانه</p></div>
                        </Link>
                    </div>
                </div>
                <div>
                    <div>
                        <Link to="/" className="d-block">
                            <div className='position-relative'>
                                <img src={myItems[6]} alt="دفتر" className='img-fluid' />
                                <div className='position-absolute w-100 h-100 rounded-circle'></div>
                            </div>
                            <div><p>دفتر</p></div>
                        </Link>
                    </div>
                    <div>
                        <Link to="/" className="d-block">
                            <div className='position-relative'>
                                <img src={myItems[7]} alt="نمایشکر" className='img-fluid' />
                                <div className='position-absolute w-100 h-100 rounded-circle'></div>
                            </div>
                            <div><p>نمایشکر (مانیتور)</p></div>
                        </Link>
                    </div>
                </div>
                <div>
                    <div>
                        <Link to="/" className="d-block">
                            <div className='position-relative'>
                                <img src={myItems[8]} alt="تبلت" className='img-fluid' />
                                <div className='position-absolute w-100 h-100 rounded-circle'></div>
                            </div>
                            <div><p>تبلت</p></div>
                        </Link>
                    </div>
                    <div>
                        <Link to="/" className="d-block">
                            <div className='position-relative'>
                                <img src={myItems[9]} alt="کنسول خانگی" className='img-fluid' />
                                <div className='position-absolute w-100 h-100 rounded-circle'></div>
                            </div>
                            <div><p>کنسول خانگی</p></div>
                        </Link>
                    </div>
                </div>
                <div>
                    <div>
                        <Link to="/" className="d-block">
                            <div className='position-relative'>
                                <img src={myItems[10]} alt="کیبورد" className='img-fluid' />
                                <div className='position-absolute w-100 h-100 rounded-circle'></div>
                            </div>
                            <div><p>کیبورد (صفحه کلید)</p></div>
                        </Link>
                    </div>
                    <div>
                        <Link to="/" className="d-block">
                            <div className='position-relative'>
                                <img src={myItems[11]} alt="ماوس" className='img-fluid' />
                                <div className='position-absolute w-100 h-100 rounded-circle'></div>
                            </div>
                            <div><p>ماوس (موشواره)</p></div>
                        </Link>
                    </div>
                </div>
                <div>
                    <div>
                        <Link to="/" className="d-block">
                            <div className='position-relative'>
                                <img src={myItems[12]} alt="شارژر تبلت و موبایل" className='img-fluid' />
                                <div className='position-absolute w-100 h-100 rounded-circle'></div>
                            </div>
                            <div><p>شارژر تبلت و موبایل</p></div>
                        </Link>
                    </div>
                    <div>
                        <Link to="/" className="d-block">
                            <div className='position-relative'>
                                <img src={myItems[13]} alt="هودی مردانه" className='img-fluid' />
                                <div className='position-absolute w-100 h-100 rounded-circle'></div>
                            </div>
                            <div><p>هودی مردانه</p></div>
                        </Link>
                    </div>
                </div>
            </Col>
        </>
    );
}
export default PishnahadDigikala;