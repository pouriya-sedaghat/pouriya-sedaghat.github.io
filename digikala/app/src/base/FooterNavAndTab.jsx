import { Row, Col, Input } from 'reactstrap';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useOnChangeHandler } from './../hooks/useOnChangeHandler';
import swal from 'sweetalert';
// import { getEmails } from './../queries/emails'; queries folder
const FooterNavAndTab = () => {
    const [emails, setEmails] = useState([]);
    const [disabled, setDisabled] = useState(false);
    const [context, onChangeHandler, setContent] = useOnChangeHandler('');
    useEffect(() => {
        getList();
    }, []);
    const getList = () => {
        setDisabled(true);
        axios({ url: 'http://localhost:3030/emails' })
            // getEmails() queries folder
            .then(({ data }) => {
                setEmails(data);
                setDisabled(false);
            })
            .catch((erorr) => { throw Error('emails daryaft nashod') })
    }
    const save = () => {
        if (!context.trim()) {
            swal('email bzn bad send con :)');
            return;
        }
        if (context.length <= 12) {
            swal('email invalid :)');
            return;
        }
        if ((context.indexOf('@') + 1) == 0) {
            swal('email bzn lashi :)');
            return;
        }
        const isEmail = emails.find((email) => email.email === context);
        if (isEmail) {
            swal('email shoma ghablan sabt shode zerang :)');
        }
        else {
            setList(context);
        }
        setContent('');
    }
    const setList = async (email) => {
        try {
            setDisabled(true);
            await axios({ url: 'http://localhost:3030/emails', method: 'POST', data: { email } })
            getList();
            swal("!ba movafagheat sabt shod", "...thanks for you", "success");
            setDisabled(false);
        } catch (erorr) { throw Error('email sabt nashod') }
    }
    return (
        <>
            <Row className='py-0 py-lg-4'>
                <Col xs={4} lg={3} className='align-self-center text-center'>
                    <ul className='p-0 m-0'>
                        <li>
                            <b>با دیجی‌کالا</b>
                        </li>
                        <li>
                            <Link to='/'>اتاق خبر دیجی‌کالا</Link>
                        </li>
                        <li>
                            <Link to='/'>فروش در دیجی‌کالا</Link>
                        </li>
                        <li>
                            <Link to='/'>فرصت‌های شغلی</Link>
                        </li>
                        <li>
                            <Link to='/'>گزارش تخلف در دیجی‌کالا</Link>
                        </li>
                        <li>
                            <Link to='/'>تماس با دیجی‌کالا</Link>
                        </li>
                        <li>
                            <Link to='/'>درباره دیجی‌کالا</Link>
                        </li>
                    </ul>
                </Col>
                <Col xs={4} lg={3} className='align-self-center text-center'>
                    <ul className='p-0 m-0'>
                        <li>
                            <b>خدمات مشتریان</b>
                        </li>
                        <li>
                            <Link to='/'>پاسخ به پرسش‌های متداول</Link>
                        </li>
                        <li>
                            <Link to='/'>رویه‌های بازگرداندن کالا</Link>
                        </li>
                        <li>
                            <Link to='/'>شرایط استفاده</Link>
                        </li>
                        <li>
                            <Link to='/'>حریم خصوصی</Link>
                        </li>
                        <li>
                            <Link to='/'>گزارش باگ</Link>
                        </li>
                    </ul>
                </Col>
                <Col xs={4} lg={3} className='align-self-center text-center'>
                    <ul className='p-0 m-0'>
                        <li>
                            <b>راهنمای خرید از دیجی‌کالا</b>
                        </li>
                        <li>
                            <Link to='/'>نحوه ثبت سفارش</Link>
                        </li>
                        <li>
                            <Link to='/'>رویه ارسال سفارش</Link>
                        </li>
                        <li>
                            <Link to='/'>شیوه‌های پرداخت</Link>
                        </li>
                    </ul>
                </Col>
                <Col xs={12} lg={3} className='align-self-center'>
                    <div className='m-1'>
                        <div className='d-flex flex-wrap justify-content-between align-content-center p-1'>
                            <b>همراه ما باشید!</b>
                        </div>
                        <div className='d-flex justify-content-evenly align-items-center p-1'>
                            <div><a href='#' target='_blank' className='d-block'></a></div>
                            <div><a href='#' target='_blank' className='d-block'></a></div>
                            <div><a href='#' target='_blank' className='d-block'></a></div>
                            <div><a href='#' target='_blank' className='d-block'></a></div>
                        </div>
                    </div>
                    <div className='m-1'>
                        <div className='p-1'>
                            <b>با ثبت ایمیل، از جدید‌ترین تخفیف‌ها با‌خبر شوید <span>.</span> <span>.</span> <span>.</span></b>
                        </div>
                        <div className='d-flex justify-content-center align-items-center p-1'>
                            <label htmlFor="email"><b>ایمیل:</b></label>
                            <Input type='email' id='email' value={context} onChange={onChangeHandler} name='email' placeholder='ایمیل را وارد کنید' className='mx-2' />
                            <Input type='submit' disabled={disabled} value={'ثبت'} className='mx-2 w-25 bg-success text-white' onClick={save} />
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    );
}
export default FooterNavAndTab;