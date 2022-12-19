import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { counter } from '../helpers/counter';
import { useReducer } from 'react';
const DigiBrands = ({ items }) => {
    const [myCounter, dispatchCounter] = useReducer(counter, { counter: 0 });
    const haidIco = () => {
        if ((myCounter.counter * 188.1) >= 1880) {
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
            <Col xs={12} className='text-center  my-4'><i className="bi bi-star text-warning mx-1"></i><b className='mx-1'>محبوب ترین برندها</b></Col>
            <Col xs={12} className='p-0 d-flex align-items-center overflow-hidden position-relative'>
                <i className={`bi bi-chevron-left ${haidIco() || ''}`} onClick={() => { dispatchCounter({ type: 'PLUS' }) }}></i>
                <i className={`bi bi-chevron-right ${showIco() || ''}`} onClick={() => { dispatchCounter({ type: 'MINUS' }) }}></i>
                <Link to="/" style={{marginRight: `${-myCounter.counter*142}px`}} className="d-block"><div className='p-3'><img src={items[0]} className='img-fluid' alt="پریل" /></div></Link>
                <Link to="/" className="d-block"><div className='p-3'><img src={items[1]} className='img-fluid' alt="پرسیل" /></div></Link>
                <Link to="/" className="d-block"><div className='p-3'><img src={items[2]} className='img-fluid' alt="king star" /></div></Link>
                <Link to="/" className="d-block"><div className='p-3'><img src={items[3]} className='img-fluid' alt="silicon power" /></div></Link>
                <Link to="/" className="d-block"><div className='p-3'><img src={items[4]} className='img-fluid' alt="huawei" /></div></Link>
                <Link to="/" className="d-block"><div className='p-3'><img src={items[5]} className='img-fluid' alt="pakshoma" /></div></Link>
                <Link to="/" className="d-block"><div className='p-3'><img src={items[6]} className='img-fluid' alt="پنبه نور" /></div></Link>
                <Link to="/" className="d-block"><div className='p-3'><img src={items[7]} className='img-fluid' alt="samsung" /></div></Link>
                <Link to="/" className="d-block"><div className='p-3'><img src={items[8]} className='img-fluid' alt="honer" /></div></Link>
                <Link to="/" className="d-block"><div className='p-3'><img src={items[9]} className='img-fluid' alt="کاله" /></div></Link>
                <Link to="/" className="d-block"><div className='p-3'><img src={items[10]} className='img-fluid' alt="mr" /></div></Link>
                <Link to="/" className="d-block"><div className='p-3'><img src={items[11]} className='img-fluid' alt="bioaaqua" /></div></Link>
                <Link to="/" className="d-block"><div className='p-3'><img src={items[12]} className='img-fluid' alt="active" /></div></Link>
                <Link to="/" className="d-block"><div className='p-3'><img src={items[13]} className='img-fluid' alt="tsco" /></div></Link>
                <Link to="/" className="d-block"><div className='p-3'><img src={items[14]} className='img-fluid' alt="schon" /></div></Link>
                <Link to="/" className="d-block"><div className='p-3'><img src={items[15]} className='img-fluid' alt="fresh" /></div></Link>
                <Link to="/" className="d-block"><div className='p-3'><img src={items[16]} className='img-fluid' alt="زر ماکارون" /></div></Link>
                <Link to="/" className="d-block"><div className='p-3'><img src={items[17]} className='img-fluid' alt="panter" /></div></Link>
                <Link to="/" className="d-block"><div className='p-3'><img src={items[18]} className='img-fluid' alt="la farrerr" /></div></Link>
            </Col>
        </>
    );
}
export default DigiBrands;