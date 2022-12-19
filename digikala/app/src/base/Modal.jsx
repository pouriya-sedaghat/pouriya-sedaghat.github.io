import { Container, Row, Col, UncontrolledAccordion, AccordionItem, AccordionHeader, AccordionBody } from 'reactstrap';
import { Link } from 'react-router-dom';
const Modal = ({ setValue }) => {
    return (
        <>
            <Container fluid className='position-fixed d-lg-none my-modal'>
                <Row>
                    <Col xs={8} sm={5} md={4} className='p-3 overflow-auto custom-modal'>
                        <div className='w-100'>
                            <Link to='/' className='d-block h-100' onClick={setValue.bind(true)}>
                                <img src='digi.svg' alt='persion digikala logo' className='d-block h-100' />
                            </Link>
                        </div>
                        <hr />
                        <div>
                            <ul className='p-0 m-0'>
                                <li>
                                    <Link to='/' onClick={setValue.bind(true)}>
                                        <i className='px-1 bi bi-basket2'></i><p>سوپرمارکت</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/' onClick={setValue.bind(true)}>
                                        <i className='px-1 bi bi-fire'></i><p>پرفروش ترین ها</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/' onClick={setValue.bind(true)}>
                                        <i className='px-1 bi bi-percent'></i><p>تخفیفات و پیشنهاد ها</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/' onClick={setValue.bind(true)}>
                                        <i className='px-1 bi bi-balloon-fill'></i><p>شگفت انگیزها</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/' onClick={setValue.bind(true)}>
                                        <i className='px-1 bi bi-question-circle'></i><p>سوالی دارید؟</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/' onClick={setValue.bind(true)}>
                                        <i className='px-1 bi bi-house-fill'></i><p>در دیجی کالا بفروشید!</p>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <hr />
                        <div>
                            <p>دسته‌بندی کالاها</p>
                        </div>
                        <div className='my-2'>
                            <UncontrolledAccordion defaultOpen='0' stayOpen>
                                <AccordionItem className='border-0'>
                                    <AccordionHeader targetId='1'>
                                        <p>موبایل</p>
                                    </AccordionHeader>
                                    <AccordionBody accordionId='1'>
                                        <AccordionItem className='border-0'>
                                            <AccordionHeader targetId='12'>
                                                <p>برندهای مختلف گوشی موبایل</p>
                                            </AccordionHeader>
                                            <AccordionBody accordionId='12'>
                                                <Link to='/' onClick={setValue.bind(true)}>بزن روش</Link>
                                            </AccordionBody>
                                        </AccordionItem>
                                        <AccordionItem className='border-0'>
                                            <AccordionHeader targetId='13'>
                                                <p>گوشی براساس قیمت</p>
                                            </AccordionHeader>
                                            <AccordionBody accordionId='13'>
                                                <Link to='/' onClick={setValue.bind(true)}>بزن روش</Link>
                                            </AccordionBody>
                                        </AccordionItem>
                                        <AccordionItem className='border-0'>
                                            <AccordionHeader targetId='14'>
                                                <p>گوشی براساس حافظه داخلی</p>
                                            </AccordionHeader>
                                            <AccordionBody accordionId='14'>
                                                <Link to='/' onClick={setValue.bind(true)}>بزن روش</Link>
                                            </AccordionBody>
                                        </AccordionItem>
                                        <AccordionItem className='border-0'>
                                            <AccordionHeader targetId='15'>
                                                <p>رزولوشن عکس</p>
                                            </AccordionHeader>
                                            <AccordionBody accordionId='15'>
                                                <Link to='/' onClick={setValue.bind(true)}>بزن روش</Link>
                                            </AccordionBody>
                                        </AccordionItem>
                                        <AccordionItem className='border-0'>
                                            <AccordionHeader targetId='16'>
                                                <p>گوشی براساس کاربری</p>
                                            </AccordionHeader>
                                            <AccordionBody accordionId='16'>
                                                <Link to='/' onClick={setValue.bind(true)}>بزن روش</Link>
                                            </AccordionBody>
                                        </AccordionItem>
                                    </AccordionBody>
                                </AccordionItem>
                                <AccordionItem className='border-0'>
                                    <AccordionHeader targetId='2'>
                                        <p>کالای دیجیتال</p>
                                    </AccordionHeader>
                                    <AccordionBody accordionId='2'>
                                        <AccordionItem className='border-0'>
                                            <AccordionHeader targetId='17'>
                                                <p>لوازم جانبی گوشی</p>
                                            </AccordionHeader>
                                            <AccordionBody accordionId='17'>
                                                <Link to='/' onClick={setValue.bind(true)}>بزن روش</Link>
                                            </AccordionBody>
                                        </AccordionItem>
                                        <AccordionItem className='border-0'>
                                            <AccordionHeader targetId='18'>
                                                <p>گوشی موبایل</p>
                                            </AccordionHeader>
                                            <AccordionBody accordionId='18'>
                                                <Link to='/' onClick={setValue.bind(true)}>بزن روش</Link>
                                            </AccordionBody>
                                        </AccordionItem>
                                        <Link to='/' onClick={setValue.bind(true)}>واقعیت مجازی</Link>
                                        <Link to='/' onClick={setValue.bind(true)}>مچ‌بند و ساعت هوشمند</Link>
                                        <Link to='/' onClick={setValue.bind(true)}>هدفون، هدست، هندزفری</Link>
                                        <Link to='/' onClick={setValue.bind(true)}>اسپیکر بلوتوث و با سیم</Link>
                                        <Link to='/' onClick={setValue.bind(true)}>هارد، فلش و SSD</Link>
                                        <AccordionItem className='border-0'>
                                            <AccordionHeader targetId='19'>
                                                <p>دوربین</p>
                                            </AccordionHeader>
                                            <AccordionBody accordionId='19'>
                                                <Link to='/' onClick={setValue.bind(true)}>بزن روش</Link>
                                            </AccordionBody>
                                        </AccordionItem>
                                        <AccordionItem className='border-0'>
                                            <AccordionHeader targetId='20'>
                                                <p>لوازم جانبی دوربین</p>
                                            </AccordionHeader>
                                            <AccordionBody accordionId='20'>
                                                <Link to='/' onClick={setValue.bind(true)}>بزن روش</Link>
                                            </AccordionBody>
                                        </AccordionItem>
                                        <Link to='/' onClick={setValue.bind(true)}>دوربین دو چشمی و شکاری</Link>
                                        <Link to='/' onClick={setValue.bind(true)}>تلسکوپ</Link>
                                        <Link to='/' onClick={setValue.bind(true)}>پلی استیشن، ایکس باکس و بازی</Link>
                                        <AccordionItem className='border-0'>
                                            <AccordionHeader targetId='21'>
                                                <p>کامپیوتر و تجهیزات جانبی</p>
                                            </AccordionHeader>
                                            <AccordionBody accordionId='21'>
                                                <Link to='/' onClick={setValue.bind(true)}>بزن روش</Link>
                                            </AccordionBody>
                                        </AccordionItem>
                                        <Link to='/' onClick={setValue.bind(true)}>لپ تاپ</Link>
                                        <AccordionItem className='border-0'>
                                            <AccordionHeader targetId='16'>
                                                <p>لوازم جانبی لپ تاپ</p>
                                            </AccordionHeader>
                                            <AccordionBody accordionId='16'>
                                                <Link to='/' onClick={setValue.bind(true)}>بزن روش</Link>
                                            </AccordionBody>
                                        </AccordionItem>
                                        <Link to='/' onClick={setValue.bind(true)}>تبلت</Link>
                                        <Link to='/' onClick={setValue.bind(true)}>شارژر تبلت و موبایل</Link>
                                        <Link to='/' onClick={setValue.bind(true)}>کیف، کاور، لوازم جانبی تبلت</Link>
                                        <Link to='/' onClick={setValue.bind(true)}>باتری</Link>
                                        <Link to='/' onClick={setValue.bind(true)}>دوربین‌های تحت شبکه</Link>
                                        <Link to='/' onClick={setValue.bind(true)}>مودم و تجهیزات شبکه</Link>
                                        <AccordionItem className='border-0'>
                                            <AccordionHeader targetId='16'>
                                                <p>ماشین های اداری</p>
                                            </AccordionHeader>
                                            <AccordionBody accordionId='16'>
                                                <Link to='/' onClick={setValue.bind(true)}>بزن روش</Link>
                                            </AccordionBody>
                                        </AccordionItem>
                                        <Link to='/' onClick={setValue.bind(true)}>کتابخوان فیدیبوک</Link>
                                        <Link to='/' onClick={setValue.bind(true)}>کارت هدیه خرید از دیجی‌کالا</Link>
                                    </AccordionBody>
                                </AccordionItem>
                                <AccordionItem className='border-0'>
                                    <AccordionHeader targetId='3'>
                                        <p>خودرو، ابزار و تجهیزات صنعتی</p>
                                    </AccordionHeader>
                                    <AccordionBody accordionId='3'>
                                        <Link to='/' onClick={setValue.bind(true)}>بزن روش</Link>
                                    </AccordionBody>
                                </AccordionItem>
                                <AccordionItem className='border-0'>
                                    <AccordionHeader targetId='4'>
                                        <p>مد و پوشاک</p>
                                    </AccordionHeader>
                                    <AccordionBody accordionId='4'>
                                        <Link to='/' onClick={setValue.bind(true)}>بزن روش</Link>
                                    </AccordionBody>
                                </AccordionItem>
                                <AccordionItem className='border-0'>
                                    <AccordionHeader targetId='5'>
                                        <p>کالاهای سوپرمارکتی</p>
                                    </AccordionHeader>
                                    <AccordionBody accordionId='5'>
                                        <Link to='/' onClick={setValue.bind(true)}>بزن روش</Link>
                                    </AccordionBody>
                                </AccordionItem>
                                <AccordionItem className='border-0'>
                                    <AccordionHeader targetId='6'>
                                        <p>اسباب بازی، کودک و نوزاد</p>
                                    </AccordionHeader>
                                    <AccordionBody accordionId='6'>
                                        <Link to='/' onClick={setValue.bind(true)}>بزن روش</Link>
                                    </AccordionBody>
                                </AccordionItem>
                                <AccordionItem className='border-0'>
                                    <AccordionHeader targetId='7'>
                                        <p>محصولات بومی و محلی</p>
                                    </AccordionHeader>
                                    <AccordionBody accordionId='7'>
                                        <Link to='/' onClick={setValue.bind(true)}>بزن روش</Link>
                                    </AccordionBody>
                                </AccordionItem>
                                <AccordionItem className='border-0'>
                                    <AccordionHeader targetId='8'>
                                        <p>زیبایی و سلامت</p>
                                    </AccordionHeader>
                                    <AccordionBody accordionId='8'>
                                        <Link to='/' onClick={setValue.bind(true)}>بزن روش</Link>
                                    </AccordionBody>
                                </AccordionItem>
                                <AccordionItem className='border-0'>
                                    <AccordionHeader targetId='9'>
                                        <p>خانه و آشپزخانه</p>
                                    </AccordionHeader>
                                    <AccordionBody accordionId='9'>
                                        <Link to='/' onClick={setValue.bind(true)}>بزن روش</Link>
                                    </AccordionBody>
                                </AccordionItem>
                                <AccordionItem className='border-0'>
                                    <AccordionHeader targetId='10'>
                                        <p>کتاب، لوازم تحریر و هنر</p>
                                    </AccordionHeader>
                                    <AccordionBody accordionId='10'>
                                        <Link to='/' onClick={setValue.bind(true)}>بزن روش</Link>
                                    </AccordionBody>
                                </AccordionItem>
                                <AccordionItem className='border-0'>
                                    <AccordionHeader targetId='11'>
                                        <p>ورزش و سفر</p>
                                    </AccordionHeader>
                                    <AccordionBody accordionId='11'>
                                        <Link to='/' onClick={setValue.bind(true)}>بزن روش</Link>
                                    </AccordionBody>
                                </AccordionItem>
                            </UncontrolledAccordion>
                        </div>
                    </Col>
                    <Col xs={4} sm={7} md={8} onClick={setValue.bind(true)}></Col>
                </Row>
            </Container>
        </>
    );
}
export default Modal;