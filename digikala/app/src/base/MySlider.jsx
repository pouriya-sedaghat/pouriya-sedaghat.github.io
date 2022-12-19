import { Container, Row, Col, Button } from 'reactstrap';
import { useState } from "react";
import { clientWidth } from './../helpers/clientWidth';
import { useReducer } from 'react';
import { counter } from './../helpers/counter';
import { useEffect } from 'react';
const MySlider = ({ listSlid }) => {
    const [myCounter, setMyCounter] = useReducer(counter, { counter: 0 });
    if (myCounter.counter == 9) {
        myCounter.counter = 0;
    }
    if (myCounter.counter == -1) {
        myCounter.counter = 8
    }
    const ccc = (num) => {
        if (myCounter.counter == num) {
            return 'custom-span';
        }
    }
    useEffect(() => {
        setInterval(() => {
            setMyCounter({ type: 'PLUS' });
        }, 4000);
    }, [])
    const [width, setWidth] = useState(clientWidth());
    return (
        <>
            <Container fluid className='slider' id='navigation'>
                <Row>
                    <Col xs={12} className='p-0 position-relative custom-slider'>
                        <div className='d-flex justify-content-evenly align-items-center'>
                            <span className={`${ccc(0) || ''}`} onClick={() => setMyCounter({ type: '1' })}></span>
                            <span className={`${ccc(1) || ''}`} onClick={() => setMyCounter({ type: '2' })}></span>
                            <span className={`${ccc(2) || ''}`} onClick={() => setMyCounter({ type: '3' })}></span>
                            <span className={`${ccc(3) || ''}`} onClick={() => setMyCounter({ type: '4' })}></span>
                            <span className={`${ccc(4) || ''}`} onClick={() => setMyCounter({ type: '5' })}></span>
                            <span className={`${ccc(5) || ''}`} onClick={() => setMyCounter({ type: '6' })}></span>
                            <span className={`${ccc(6) || ''}`} onClick={() => setMyCounter({ type: '7' })}></span>
                            <span className={`${ccc(7) || ''}`} onClick={() => setMyCounter({ type: '8' })}></span>
                            <span className={`${ccc(8) || ''}`} onClick={() => setMyCounter({ type: '9' })}></span>
                        </div>
                        <a href="#" target='blank' className="d-inline-block" style={{ marginLeft: `${(-myCounter.counter) * width}px` }}><img src={listSlid[0]} alt="slid one" /></a>
                        <a href="#" target='blank' className="d-inline-block"><img src={listSlid[1]} className='img-fluid' alt="slid two" /></a>
                        <a href="#" target='blank' className="d-inline-block"><img src={listSlid[2]} className='img-fluid' alt="slid three" /></a>
                        <a href="#" target='blank' className="d-inline-block"><img src={listSlid[3]} className='img-fluid' alt="slid four" /></a>
                        <a href="#" target='blank' className="d-inline-block"><img src={listSlid[4]} className='img-fluid' alt="slid five" /></a>
                        <a href="#" target='blank' className="d-inline-block"><img src={listSlid[5]} className='img-fluid' alt="slid six" /></a>
                        <a href="#" target='blank' className="d-inline-block"><img src={listSlid[6]} className='img-fluid' alt="slid seven" /></a>
                        <a href="#" target='blank' className="d-inline-block"><img src={listSlid[7]} className='img-fluid' alt="slid eight" /></a>
                        <a href="#" target='blank' className="d-inline-block"><img src={listSlid[8]} className='img-fluid' alt="slid nine" /></a>
                        <i className="bi bi-chevron-left" onClick={() => setMyCounter({ type: 'MINUS' })}></i>
                        <i className="bi bi-chevron-right" onClick={() => setMyCounter({ type: 'PLUS' })}></i>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
export default MySlider;