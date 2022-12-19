import { Container, Row, Col, UncontrolledAccordion, AccordionItem, AccordionHeader, AccordionBody } from 'reactstrap';
import { Link } from 'react-router-dom';
const InfoModal = ({ backHome }) => {
    return (
        <Container fluid className='position-fixed d-lg-none custom-info'>
            <Row className='d-block'>
                <Col xs={12} className='d-flex justify-content-between align-items-center height-col-info1'>
                    <p className='text-white'>پشتیبانی آنلاین</p><i className='bi bi-arrow-left text-white custom-icon' onClick={backHome.bind(true)}></i>
                </Col>
                <Col xs={12} className='py-2 height-col-info2'>
                    <div>
                        <p><b>سلام</b> &#128075; &#128075;</p>
                        <p>جواب سوال‌هاتون رو می‌تونید در زیر پیدا کنید.</p>
                        <p>در غیر اینصورت از ما بپرسید، ما همیشه به سوالاتتون جواب می‌دیم. &#128522;</p>
                    </div>
                    <div className='border-top border-bottom'>
                        <UncontrolledAccordion defaultOpen='0' stayOpen className='p-3 my-5 overflow-auto custom-accordion'>
                            <AccordionItem className='border-0'>
                                <AccordionHeader targetId='1'>
                                    <p>چگونه میتوانم یک پروفایل ایجاد کنم؟</p>
                                </AccordionHeader>
                                <AccordionBody accordionId='1'>
                                    <p>در وب سایت روی گزینه 'ثبت نام' کلیک کنید. میتوانید با استفاده از شماره موبایل ثبت نام خود را انجام دهید. (کد فعال سازی برایتان پیامک میشود .) بعد از وارد نمودن کد فعالسازی ، ثبت نام انجام می شود. سپس روی گزینه تکمیل اطلاعات کلیک و اطلاعات خود را تکمیل نمایید.</p>
                                </AccordionBody>
                            </AccordionItem>
                            <AccordionItem className='border-0'>
                                <AccordionHeader targetId='2'>
                                    <p>چطور در دیجی کالا سفارش خود را ثبت کنم ؟</p>
                                </AccordionHeader>
                                <AccordionBody accordionId='2'>
                                    <p>بعد از ورود به پروفایل ، کالای مدنظر خود را به سبد خرید اضافه کنید ، پس از انتخاب آدرس میتوانید نوع پرداخت خود را انتخاب کنید.بعد از اتمام ثبت سفارش ، سیستم کد سفارش شما را نمایش خواهد داد.</p>
                                </AccordionBody>
                            </AccordionItem>
                            <AccordionItem className='border-0'>
                                <AccordionHeader targetId='3'>
                                    <p>کالایی را که در طرح پیشنهاد شگفت انگیز می باشد می توان با تعداد بیش از یک عدد خریداری کرد؟</p>
                                </AccordionHeader>
                                <AccordionBody accordionId='3'>
                                    <p>به دلیل اینکه طرح پیشنهاد شگفت انگیز یک طرح تشویقی خرید است، دیجی‌کالا تعهدی در قبال سفارش های تعدادی ندارد و در صورتی که امکان فروش بیشتر از یک عدد وجود داشته باشد، هماهنگی ‌های لازم با مشتری انجام خواهد شد.</p>
                                </AccordionBody>
                            </AccordionItem>
                        </UncontrolledAccordion>
                    </div>
                </Col>
                <Col xs={12} className='p-0 d-flex flex-wrap justify-content-center align-items-center height-col-info3'>
                    <div><p className='w-100 text-center'>جواب سوالتون رو پیدا نکردید؟</p>
                        <Link to='/' className='w-100' onClick={backHome.bind(true)}><b className='d-inline-block p-1'>گفتگو با پشتیبان آنلاین</b><i className='bi bi-chevron-left'></i></Link></div>
                </Col>
            </Row>
        </Container>
    );
}
export default InfoModal;