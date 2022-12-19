import { Container, Row, Col, UncontrolledAccordion, AccordionItem, AccordionHeader, AccordionBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { SET_CITY } from '../redux/slices/city';
const ModalLocation = ({ setValue }) => {
    const disPatcher = useDispatch();
    return (
        <>
            <Container fluid className='position-fixed modal-loc'>
                <Row>
                    <Col xs={3} sm={4} lg={5} onClick={setValue.bind(true)} className='h-100'></Col>
                    <Col xs={6} sm={4} lg={2} className='rounded p-0'>
                        <div onClick={setValue.bind(true)} className='c-height'></div>
                        <div className='custom-col-mod'>
                            <UncontrolledAccordion defaultOpen='0' stayOpen>
                                <AccordionItem className='border-0 p-1'>
                                    <AccordionHeader targetId="1">
                                        <p>آذربایجان شرقی</p>
                                    </AccordionHeader>
                                    <AccordionBody accordionId="1">
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('آذربایجان شرقی , تیمورلو'))}>تیمورلو</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('آذربایجان شرقی , گوگان'))}>گوگان</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('آذربایجان شرقی , ممقان'))}>ممقان</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('آذربایجان شرقی , یلخچی'))}>ایلخچی</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('آذربایجان شرقی , اسکو'))}>اسکو</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('آذربایجان شرقی , شهر جدید سهند'))}>شهر جدید سهند</Link>
                                    </AccordionBody>
                                </AccordionItem>
                                <AccordionItem className='border-0 p-1'>
                                    <AccordionHeader targetId="2">
                                        <p>آذربایجان غربی</p>
                                    </AccordionHeader>
                                    <AccordionBody accordionId="2">
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('آذربایجان غربی , تیمورلو'))}>تیمورلو</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('آذربایجان غربی , گوگان'))}>گوگان</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('آذربایجان غربی , ممقان'))}>ممقان</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('آذربایجان غربی , یلخچی'))}>ایلخچی</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('آذربایجان غربی , اسکو'))}>اسکو</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('آذربایجان غربی , شهر جدید سهند'))}>شهر جدید سهند</Link>
                                    </AccordionBody>
                                </AccordionItem>
                                <AccordionItem className='border-0 p-1'>
                                    <AccordionHeader targetId="3">
                                        <p>اردبیل</p>
                                    </AccordionHeader>
                                    <AccordionBody accordionId="3">
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('اردبیل , تیمورلو'))}>تیمورلو</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('اردبیل , گوگان'))}>گوگان</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('اردبیل , ممقان'))}>ممقان</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('اردبیل , یلخچی'))}>ایلخچی</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('اردبیل , اسکو'))}>اسکو</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('اردبیل , شهر جدید سهند'))}>شهر جدید سهند</Link>
                                    </AccordionBody>
                                </AccordionItem>
                                <AccordionItem className='border-0 p-1'>
                                    <AccordionHeader targetId="4">
                                        <p>اصفهان</p>
                                    </AccordionHeader>
                                    <AccordionBody accordionId="4">
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('اصفهان , تیمورلو'))}>تیمورلو</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('اصفهان , گوگان'))}>گوگان</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('اصفهان , ممقان'))}>ممقان</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('اصفهان , یلخچی'))}>ایلخچی</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('اصفهان , اسکو'))}>اسکو</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('اصفهان , شهر جدید سهند'))}>شهر جدید سهند</Link>
                                    </AccordionBody>
                                </AccordionItem>
                                <AccordionItem className='border-0 p-1'>
                                    <AccordionHeader targetId="5">
                                        <p>البرز</p>
                                    </AccordionHeader>
                                    <AccordionBody accordionId="5">
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('البرز , تیمورلو'))}>تیمورلو</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('البرز , گوگان'))}>گوگان</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('البرز , ممقان'))}>ممقان</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('البرز , یلخچی'))}>ایلخچی</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('البرز , اسکو'))}>اسکو</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('البرز , شهر جدید سهند'))}>شهر جدید سهند</Link>
                                    </AccordionBody>
                                </AccordionItem>
                                <AccordionItem className='border-0 p-1'>
                                    <AccordionHeader targetId="6">
                                        <p>ایلام</p>
                                    </AccordionHeader>
                                    <AccordionBody accordionId="6">
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('ایلام , تیمورلو'))}>تیمورلو</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('ایلام , گوگان'))}>گوگان</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('ایلام , ممقان'))}>ممقان</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('ایلام , یلخچی'))}>ایلخچی</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('ایلام , اسکو'))}>اسکو</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('ایلام , شهر جدید سهند'))}>شهر جدید سهند</Link>
                                    </AccordionBody>
                                </AccordionItem>
                                <AccordionItem className='border-0 p-1'>
                                    <AccordionHeader targetId="7">
                                        <p>بوشهر</p>
                                    </AccordionHeader>
                                    <AccordionBody accordionId="7">
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('بوشهر , تیمورلو'))}>تیمورلو</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('بوشهر , گوگان'))}>گوگان</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('بوشهر , ممقان'))}>ممقان</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('بوشهر , یلخچی'))}>ایلخچی</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('بوشهر , اسکو'))}>اسکو</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('بوشهر , شهر جدید سهند'))}>شهر جدید سهند</Link>
                                    </AccordionBody>
                                </AccordionItem>
                                <AccordionItem className='border-0 p-1'>
                                    <AccordionHeader targetId="8">
                                        <p>تهران</p>
                                    </AccordionHeader>
                                    <AccordionBody accordionId="8">
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('تهران , تیمورلو'))}>تیمورلو</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('تهران , گوگان'))}>گوگان</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('تهران , ممقان'))}>ممقان</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('تهران , یلخچی'))}>ایلخچی</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('تهران , اسکو'))}>اسکو</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('تهران , شهر جدید سهند'))}>شهر جدید سهند</Link>
                                    </AccordionBody>
                                </AccordionItem>
                                <AccordionItem className='border-0 p-1'>
                                    <AccordionHeader targetId="9">
                                        <p>چهار محال و بختیاری</p>
                                    </AccordionHeader>
                                    <AccordionBody accordionId="9">
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('چهار محال و بختیاری , تیمورلو'))}>تیمورلو</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('چهار محال و بختیاری , گوگان'))}>گوگان</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('چهار محال و بختیاری , ممقان'))}>ممقان</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('چهار محال و بختیاری , یلخچی'))}>ایلخچی</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('چهار محال و بختیاری , اسکو'))}>اسکو</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('چهار محال و بختیاری , شهر جدید سهند'))}>شهر جدید سهند</Link>
                                    </AccordionBody>
                                </AccordionItem>
                                <AccordionItem className='border-0 p-1'>
                                    <AccordionHeader targetId="10">
                                        <p>خراسان جنوبی</p>
                                    </AccordionHeader>
                                    <AccordionBody accordionId="10">
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('خراسان جنوبی , تیمورلو'))}>تیمورلو</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('خراسان جنوبی , گوگان'))}>گوگان</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('خراسان جنوبی , ممقان'))}>ممقان</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('خراسان جنوبی , یلخچی'))}>ایلخچی</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('خراسان جنوبی , اسکو'))}>اسکو</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('خراسان جنوبی , شهر جدید سهند'))}>شهر جدید سهند</Link>
                                    </AccordionBody>
                                </AccordionItem>
                                <AccordionItem className='border-0 p-1'>
                                    <AccordionHeader targetId="11">
                                        <p>خراسان رضوی</p>
                                    </AccordionHeader>
                                    <AccordionBody accordionId="11">
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('خراسان رضوی , تیمورلو'))}>تیمورلو</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('خراسان رضوی , گوگان'))}>گوگان</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('خراسان رضوی , ممقان'))}>ممقان</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('خراسان رضوی , یلخچی'))}>ایلخچی</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('خراسان رضوی , اسکو'))}>اسکو</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('خراسان رضوی , شهر جدید سهند'))}>شهر جدید سهند</Link>
                                    </AccordionBody>
                                </AccordionItem>
                                <AccordionItem className='border-0 p-1'>
                                    <AccordionHeader targetId="12">
                                        <p>خراسان شمالی</p>
                                    </AccordionHeader>
                                    <AccordionBody accordionId="12">
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('خراسان شمالی , تیمورلو'))}>تیمورلو</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('خراسان شمالی , گوگان'))}>گوگان</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('خراسان شمالی , ممقان'))}>ممقان</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('خراسان شمالی , یلخچی'))}>ایلخچی</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('خراسان شمالی , اسکو'))}>اسکو</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('خراسان شمالی , شهر جدید سهند'))}>شهر جدید سهند</Link>
                                    </AccordionBody>
                                </AccordionItem>
                                <AccordionItem className='border-0 p-1'>
                                    <AccordionHeader targetId="13">
                                        <p>خوزستان</p>
                                    </AccordionHeader>
                                    <AccordionBody accordionId="13">
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('خوزستان , تیمورلو'))}>تیمورلو</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('خوزستان , گوگان'))}>گوگان</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('خوزستان , ممقان'))}>ممقان</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('خوزستان , یلخچی'))}>ایلخچی</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('خوزستان , اسکو'))}>اسکو</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('خوزستان , شهر جدید سهند'))}>شهر جدید سهند</Link>
                                    </AccordionBody>
                                </AccordionItem>
                                <AccordionItem className='border-0 p-1'>
                                    <AccordionHeader targetId="14">
                                        <p>زنجان</p>
                                    </AccordionHeader>
                                    <AccordionBody accordionId="14">
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('زنجان , تیمورلو'))}>تیمورلو</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('زنجان , گوگان'))}>گوگان</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('زنجان , ممقان'))}>ممقان</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('زنجان , یلخچی'))}>ایلخچی</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('زنجان , اسکو'))}>اسکو</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('زنجان , شهر جدید سهند'))}>شهر جدید سهند</Link>
                                    </AccordionBody>
                                </AccordionItem>
                                <AccordionItem className='border-0 p-1'>
                                    <AccordionHeader targetId="15">
                                        <p>سمنان</p>
                                    </AccordionHeader>
                                    <AccordionBody accordionId="15">
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('سمنان , تیمورلو'))}>تیمورلو</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('سمنان , گوگان'))}>گوگان</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('سمنان , ممقان'))}>ممقان</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('سمنان , یلخچی'))}>ایلخچی</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('سمنان , اسکو'))}>اسکو</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('سمنان , شهر جدید سهند'))}>شهر جدید سهند</Link>
                                    </AccordionBody>
                                </AccordionItem>
                                <AccordionItem className='border-0 p-1'>
                                    <AccordionHeader targetId="16">
                                        <p>سیستان و بلوچستان</p>
                                    </AccordionHeader>
                                    <AccordionBody accordionId="16">
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('سیستان و بلوچستان , تیمورلو'))}>تیمورلو</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('سیستان و بلوچستان , گوگان'))}>گوگان</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('سیستان و بلوچستان , ممقان'))}>ممقان</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('سیستان و بلوچستان , یلخچی'))}>ایلخچی</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('سیستان و بلوچستان , اسکو'))}>اسکو</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('سیستان و بلوچستان , شهر جدید سهند'))}>شهر جدید سهند</Link>
                                    </AccordionBody>
                                </AccordionItem>
                                <AccordionItem className='border-0 p-1'>
                                    <AccordionHeader targetId="17">
                                        <p>فارس</p>
                                    </AccordionHeader>
                                    <AccordionBody accordionId="17">
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('فارس , تیمورلو'))}>تیمورلو</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('فارس , گوگان'))}>گوگان</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('فارس , ممقان'))}>ممقان</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('فارس , یلخچی'))}>ایلخچی</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('فارس , اسکو'))}>اسکو</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('فارس , شهر جدید سهند'))}>شهر جدید سهند</Link>
                                    </AccordionBody>
                                </AccordionItem>
                                <AccordionItem className='border-0 p-1'>
                                    <AccordionHeader targetId="18">
                                        <p>قزوین</p>
                                    </AccordionHeader>
                                    <AccordionBody accordionId="18">
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('قزوین , تیمورلو'))}>تیمورلو</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('قزوین , گوگان'))}>گوگان</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('قزوین , ممقان'))}>ممقان</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('قزوین , یلخچی'))}>ایلخچی</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('قزوین , اسکو'))}>اسکو</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('قزوین , شهر جدید سهند'))}>شهر جدید سهند</Link>
                                    </AccordionBody>
                                </AccordionItem>
                                <AccordionItem className='border-0 p-1'>
                                    <AccordionHeader targetId="19">
                                        <p>قم</p>
                                    </AccordionHeader>
                                    <AccordionBody accordionId="19">
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('قم , تیمورلو'))}>تیمورلو</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('قم , گوگان'))}>گوگان</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('قم , ممقان'))}>ممقان</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('قم , یلخچی'))}>ایلخچی</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('قم , اسکو'))}>اسکو</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('قم , شهر جدید سهند'))}>شهر جدید سهند</Link>
                                    </AccordionBody>
                                </AccordionItem>
                                <AccordionItem className='border-0 p-1'>
                                    <AccordionHeader targetId="20">
                                        <p>کردستان</p>
                                    </AccordionHeader>
                                    <AccordionBody accordionId="20">
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('کردستان , تیمورلو'))}>تیمورلو</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('کردستان , گوگان'))}>گوگان</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('کردستان , ممقان'))}>ممقان</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('کردستان , یلخچی'))}>ایلخچی</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('کردستان , اسکو'))}>اسکو</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('کردستان , شهر جدید سهند'))}>شهر جدید سهند</Link>
                                    </AccordionBody>
                                </AccordionItem>
                                <AccordionItem className='border-0 p-1'>
                                    <AccordionHeader targetId="21">
                                        <p>کرمان</p>
                                    </AccordionHeader>
                                    <AccordionBody accordionId="21">
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('کرمان , تیمورلو'))}>تیمورلو</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('کرمان , گوگان'))}>گوگان</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('کرمان , ممقان'))}>ممقان</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('کرمان , یلخچی'))}>ایلخچی</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('کرمان , اسکو'))}>اسکو</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('کرمان , شهر جدید سهند'))}>شهر جدید سهند</Link>
                                    </AccordionBody>
                                </AccordionItem>
                                <AccordionItem className='border-0 p-1'>
                                    <AccordionHeader targetId="22">
                                        <p>کرمانشاه</p>
                                    </AccordionHeader>
                                    <AccordionBody accordionId="22">
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('کرمانشاه , تیمورلو'))}>تیمورلو</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('کرمانشاه , گوگان'))}>گوگان</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('کرمانشاه , ممقان'))}>ممقان</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('کرمانشاه , یلخچی'))}>ایلخچی</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('کرمانشاه , اسکو'))}>اسکو</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('کرمانشاه , شهر جدید سهند'))}>شهر جدید سهند</Link>
                                    </AccordionBody>
                                </AccordionItem>
                                <AccordionItem className='border-0 p-1'>
                                    <AccordionHeader targetId="23">
                                        <p>کهگیلویه و بویراحمد</p>
                                    </AccordionHeader>
                                    <AccordionBody accordionId="23">
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('کهگیلویه و بویراحمد , تیمورلو'))}>تیمورلو</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('کهگیلویه و بویراحمد , گوگان'))}>گوگان</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('کهگیلویه و بویراحمد , ممقان'))}>ممقان</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('کهگیلویه و بویراحمد , یلخچی'))}>ایلخچی</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('کهگیلویه و بویراحمد , اسکو'))}>اسکو</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('کهگیلویه و بویراحمد , شهر جدید سهند'))}>شهر جدید سهند</Link>
                                    </AccordionBody>
                                </AccordionItem>
                                <AccordionItem className='border-0 p-1'>
                                    <AccordionHeader targetId="24">
                                        <p>گلستان</p>
                                    </AccordionHeader>
                                    <AccordionBody accordionId="24">
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('گلستان , تیمورلو'))}>تیمورلو</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('گلستان , گوگان'))}>گوگان</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('گلستان , ممقان'))}>ممقان</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('گلستان , یلخچی'))}>ایلخچی</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('گلستان , اسکو'))}>اسکو</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('گلستان , شهر جدید سهند'))}>شهر جدید سهند</Link>
                                    </AccordionBody>
                                </AccordionItem>
                                <AccordionItem className='border-0 p-1'>
                                    <AccordionHeader targetId="25">
                                        <p>گیلان</p>
                                    </AccordionHeader>
                                    <AccordionBody accordionId="25">
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('گیلان , تیمورلو'))}>تیمورلو</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('گیلان , گوگان'))}>گوگان</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('گیلان , ممقان'))}>ممقان</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('گیلان , یلخچی'))}>ایلخچی</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('گیلان , اسکو'))}>اسکو</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('گیلان , شهر جدید سهند'))}>شهر جدید سهند</Link>
                                    </AccordionBody>
                                </AccordionItem>
                                <AccordionItem className='border-0 p-1'>
                                    <AccordionHeader targetId="26">
                                        <p>لرستان</p>
                                    </AccordionHeader>
                                    <AccordionBody accordionId="26">
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('لرستان , تیمورلو'))}>تیمورلو</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('لرستان , گوگان'))}>گوگان</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('لرستان , ممقان'))}>ممقان</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('لرستان , یلخچی'))}>ایلخچی</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('لرستان , اسکو'))}>اسکو</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('لرستان , شهر جدید سهند'))}>شهر جدید سهند</Link>
                                    </AccordionBody>
                                </AccordionItem>
                                <AccordionItem className='border-0 p-1'>
                                    <AccordionHeader targetId="27">
                                        <p>مازندران</p>
                                    </AccordionHeader>
                                    <AccordionBody accordionId="27">
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('مازندران , تیمورلو'))}>تیمورلو</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('مازندران , گوگان'))}>گوگان</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('مازندران , ممقان'))}>ممقان</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('مازندران , یلخچی'))}>ایلخچی</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('مازندران , اسکو'))}>اسکو</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('مازندران , شهر جدید سهند'))}>شهر جدید سهند</Link>
                                    </AccordionBody>
                                </AccordionItem>
                                <AccordionItem className='border-0 p-1'>
                                    <AccordionHeader targetId="28">
                                        <p>مرکزی</p>
                                    </AccordionHeader>
                                    <AccordionBody accordionId="28">
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('مرکزی , تیمورلو'))}>تیمورلو</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('مرکزی , گوگان'))}>گوگان</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('مرکزی , ممقان'))}>ممقان</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('مرکزی , یلخچی'))}>ایلخچی</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('مرکزی , اسکو'))}>اسکو</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('مرکزی , شهر جدید سهند'))}>شهر جدید سهند</Link>
                                    </AccordionBody>
                                </AccordionItem>
                                <AccordionItem className='border-0 p-1'>
                                    <AccordionHeader targetId="29">
                                        <p>هرمزگان</p>
                                    </AccordionHeader>
                                    <AccordionBody accordionId="29">
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('هرمزگان , تیمورلو'))}>تیمورلو</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('هرمزگان , گوگان'))}>گوگان</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('هرمزگان , ممقان'))}>ممقان</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('هرمزگان , یلخچی'))}>ایلخچی</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('هرمزگان , اسکو'))}>اسکو</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('هرمزگان , شهر جدید سهند'))}>شهر جدید سهند</Link>
                                    </AccordionBody>
                                </AccordionItem>
                                <AccordionItem className='border-0 p-1'>
                                    <AccordionHeader targetId="30">
                                        <p>همدان</p>
                                    </AccordionHeader>
                                    <AccordionBody accordionId="30">
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('همدان , تیمورلو'))}>تیمورلو</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('همدان , گوگان'))}>گوگان</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('همدان , ممقان'))}>ممقان</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('همدان , یلخچی'))}>ایلخچی</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('همدان , اسکو'))}>اسکو</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('همدان , شهر جدید سهند'))}>شهر جدید سهند</Link>
                                    </AccordionBody>
                                </AccordionItem>
                                <AccordionItem className='border-0 p-1'>
                                    <AccordionHeader targetId="31">
                                        <p>یزد</p>
                                    </AccordionHeader>
                                    <AccordionBody accordionId="31">
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('یزد , تیمورلو'))}>تیمورلو</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('یزد , گوگان'))}>گوگان</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('یزد , ممقان'))}>ممقان</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('یزد , یلخچی'))}>ایلخچی</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('یزد , اسکو'))}>اسکو</Link>
                                        <Link to='/' onClick={setValue.bind(true)} onMouseDown={() => disPatcher(SET_CITY('یزد , شهر جدید سهند'))}>شهر جدید سهند</Link>
                                    </AccordionBody>
                                </AccordionItem>
                            </UncontrolledAccordion>
                        </div>
                        <div onClick={setValue.bind(true)} className='c-height'></div>
                    </Col>
                    <Col xs={3} sm={4} lg={5} onClick={setValue.bind(true)} className='h-100'></Col>
                </Row>
            </Container>
        </>
    );
}
export default ModalLocation;