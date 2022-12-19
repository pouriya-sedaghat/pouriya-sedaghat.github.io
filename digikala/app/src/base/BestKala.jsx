import { Col } from "reactstrap";
import { Link } from 'react-router-dom';
import { useState } from "react";
const BestKala = ({ MyBgs }) => {
    const [counter, setCounter] = useState(0);
    const SHOW_ICON = () => {
        if (counter >= 1) {
            return 'd-inline';
        }
    }
    const HIDE_ICON = () => {
        if ((counter * 203) >= 1015) {
            return 'd-none';
        }
    }
    return (
        <>
            <Col xs={12} className='position-relative'>
                <div className="text-center"><i className="bi bi-fire mx-2">
                </i><b>پرفروش‌ ترین کالاها</b>
                </div>
                <div className="position-absolute rounded-5 overflow-hidden"><Link to='/' className='d-block py-1 px-3 text-decoration-none text-info'>مشاهده همه</Link></div>
            </Col>
            <Col xs={12} className='d-flex align-items-center position-relative overflow-hidden'>
                <i className={`bi bi-chevron-left position-absolute ${HIDE_ICON() || ''}`} onClick={() => setCounter(prevState => ++prevState)}></i>
                <i className={`bi bi-chevron-right position-absolute ${SHOW_ICON() || ''}`} onClick={() => setCounter(prevState => --prevState)}></i>
                <div style={{ marginRight: `${-counter * 203}px` }}>
                    <div>
                        <Link to='/' className="d-flex align-items-center text-decoration-none">
                            <div><img src={MyBgs[0]} alt="ماهی تن ساحل" className="img-fluid" /></div>
                            <div className="w-75 d-flex align-items-center">
                                <b className='text-info mx-2 rounded-5 bg-secondary'>1</b>
                                <p>کنسرو ماهی تن در روغن مایع ساحل - 180 گرم</p>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link to='/' className="d-flex align-items-center text-decoration-none">
                            <div><img src={MyBgs[1]} alt="ایفون" className="img-fluid" /></div>
                            <div className="w-75 d-flex align-items-center">
                                <b className='text-info mx-2 rounded-5 bg-secondary'>2</b>
                                <p>گوشی موبایل سامسونگ مدل Galaxy A13 دو سیم کارت ظرفیت 64 گیگابایت و رم 4 گیگابایت - ویتنام</p>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link to='/' className="d-flex align-items-center text-decoration-none">
                            <div><img src={MyBgs[2]} alt="ایفون" className="img-fluid" /></div>
                            <div className="w-75 d-flex align-items-center">
                                <b className='text-info mx-2 rounded-5 bg-secondary'>3</b>
                                <p>گوشی موبایل سامسونگ مدل Galaxy A32 SM-A325F/DS دو سیم‌کارت ظرفیت 128 گیگابایت و رم 6 گیگابایت</p>
                            </div>
                        </Link>
                    </div>
                </div>
                <div>
                    <div>
                        <Link to='/' className="d-flex align-items-center text-decoration-none">
                            <div><img src={MyBgs[3]} alt="زعفران" className="img-fluid" /></div>
                            <div className="w-75 d-flex align-items-center">
                                <b className='text-info mx-2 rounded-5 bg-secondary'>4</b>
                                <p>زعفران درجه یک مصطفوی - 4.608 گرم</p>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link to='/' className="d-flex align-items-center text-decoration-none">
                            <div><img src={MyBgs[4]} alt="غنچه پلاس" className="img-fluid" /></div>
                            <div className="w-75 d-flex align-items-center">
                                <b className='text-info mx-2 rounded-5 bg-secondary'>5</b>
                                <p>روغن آفتابگردان حاوی توکوفرول غنچه پلاس - 900 میلی لیتر</p>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link to='/' className="d-flex align-items-center text-decoration-none">
                            <div><img src={MyBgs[5]} alt="بیتا" className="img-fluid" /></div>
                            <div className="w-75 d-flex align-items-center">
                                <b className='text-info mx-2 rounded-5 bg-secondary'>6</b>
                                <p>دستمال کاغذی 100 برگ بیتا مدل White بسته 10 عددی</p>
                            </div>
                        </Link>
                    </div>
                </div>
                <div>
                    <div>
                        <Link to='/' className="d-flex align-items-center text-decoration-none">
                            <div><img src={MyBgs[6]} alt="زر ماکارون" className="img-fluid" /></div>
                            <div className="w-75 d-flex align-items-center">
                                <b className='text-info mx-2 rounded-5 bg-secondary'>7</b>
                                <p>اسپاگتی قطر 1.2 زر ماکارون مقدار 700 گرم</p>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link to='/' className="d-flex align-items-center text-decoration-none">
                            <div><img src={MyBgs[7]} alt="غنچه" className="img-fluid" /></div>
                            <div className="w-75 d-flex align-items-center">
                                <b className='text-info mx-2 rounded-5 bg-secondary'>8</b>
                                <p>روغن سرخ کردنی غنچه - 1.5 لیتر</p>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link to='/' className="d-flex align-items-center text-decoration-none">
                            <div><img src={MyBgs[8]} alt="رب گوجه فرنگی روژین" className="img-fluid" /></div>
                            <div className="w-75 d-flex align-items-center">
                                <b className='text-info mx-2 rounded-5 bg-secondary'>9</b>
                                <p>رب گوجه فرنگی روژین مقدار 800 گرم </p>
                            </div>
                        </Link>
                    </div>
                </div>
                <div>
                    <div>
                        <Link to='/' className="d-flex align-items-center text-decoration-none">
                            <div><img src={MyBgs[9]} alt="هدفون بی سیم" className="img-fluid" /></div>
                            <div className="w-75 d-flex align-items-center">
                                <b className='text-info mx-2 rounded-5 bg-secondary'>10</b>
                                <p>هدفون بی سیم مدل K55</p>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link to='/' className="d-flex align-items-center text-decoration-none">
                            <div><img src={MyBgs[10]} alt="میوا" className="img-fluid" /></div>
                            <div className="w-75 d-flex align-items-center">
                                <b className='text-info mx-2 rounded-5 bg-secondary'>11</b>
                                <p>آب معدنی میوا - 1.5 لیتر بسته 6 عددی</p>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link to='/' className="d-flex align-items-center text-decoration-none">
                            <div><img src={MyBgs[11]} alt="غنچه پلاس" className="img-fluid" /></div>
                            <div className="w-75 d-flex align-items-center">
                                <b className='text-info mx-2 rounded-5 bg-secondary'>12</b>
                                <p>روغن آفتابگردان حاوی توکوفرول غنچه پلاس - 1500 میلی لیتر</p>
                            </div>
                        </Link>
                    </div>
                </div>
                <div>
                    <div>
                        <Link to='/' className="d-flex align-items-center text-decoration-none">
                            <div><img src={MyBgs[12]} alt="پنتر" className="img-fluid" /></div>
                            <div className="w-75 d-flex align-items-center">
                                <b className='text-info mx-2 rounded-5 bg-secondary'>13</b>
                                <p>خودکار پنتر مدل فوق روان نانو آنتی باکتریال کد DP-105-1</p>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link to='/' className="d-flex align-items-center text-decoration-none">
                            <div><img src={MyBgs[13]} alt="هدفون بلوتوثی" className="img-fluid" /></div>
                            <div className="w-75 d-flex align-items-center">
                                <b className='text-info mx-2 rounded-5 bg-secondary'>14</b>
                                <p>هدفون بلوتوثی کیو سی وای مدل T13 TWS</p>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link to='/' className="d-flex align-items-center text-decoration-none">
                            <div><img src={MyBgs[14]} alt="ایپک" className="img-fluid" /></div>
                            <div className="w-75 d-flex align-items-center">
                                <b className='text-info mx-2 rounded-5 bg-secondary'>15</b>
                                <p>پد آرایش پاک کن ایپک مدل 01 بسته 70 عددی</p>
                            </div>
                        </Link>
                    </div>
                </div>
                <div>
                    <div>
                        <Link to='/' className="d-flex align-items-center text-decoration-none">
                            <div><img src={MyBgs[15]} alt="کلاه" className="img-fluid" /></div>
                            <div className="w-75 d-flex align-items-center">
                                <b className='text-info mx-2 rounded-5 bg-secondary'>16</b>
                                <p>کلاه بافتنی مدل eyes2021</p>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link to='/' className="d-flex align-items-center text-decoration-none">
                            <div><img src={MyBgs[16]} alt="هدفون بلوتوثی" className="img-fluid" /></div>
                            <div className="w-75 d-flex align-items-center">
                                <b className='text-info mx-2 rounded-5 bg-secondary'>17</b>
                                <p>هندزفری بلوتوثی مدل  inpods 12</p>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link to='/' className="d-flex align-items-center text-decoration-none">
                            <div><img src={MyBgs[17]} alt="هدفون بی سیم" className="img-fluid" /></div>
                            <div className="w-75 d-flex align-items-center">
                                <b className='text-info mx-2 rounded-5 bg-secondary'>18</b>
                                <p>هدفون بی سیم مدل BTH-F9-5</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </Col>
        </>
    );
}
export default BestKala;