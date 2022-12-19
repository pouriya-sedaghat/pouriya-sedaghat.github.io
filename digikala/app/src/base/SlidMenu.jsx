import { Link } from 'react-router-dom';
import { counter } from '../helpers/counter';
import { useReducer } from 'react';
const SlidMenu = ({ picList }) => {
    const [myCounter, DispatchCounter] = useReducer(counter, { counter: 0 });
    const haidIco = () => {
        if ((myCounter.counter * 188.1) == 1316.7) {
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
            <i className={`bi bi-chevron-left ${haidIco() || ''}`} onClick={() => { DispatchCounter({ type: 'PLUS' }) }}></i>
            <i className={`bi bi-chevron-right ${showIco() || ''}`} onClick={() => { DispatchCounter({ type: 'MINUS' }) }}></i>
            <div style={{ marginRight: `${-myCounter.counter * 188.1}px` }}>
                <Link to='/' className='d-flex flex-wrap justify-content-center'>
                    <div><img src={picList[0]} alt='amazing request' className='img-fluid' /></div>
                    <div><img src={picList[1]} alt='box' className='img-fluid' /></div>
                    <div>
                        <span className='d-block'><p>مشاهده همه</p><i className='bi bi-chevron-left'></i></span>
                    </div>
                </Link>
            </div>
            <div>
                <Link to='/' className='d-block'>
                    <div><img src={picList[2]} alt='تخت خواب' className='img-fluid' /></div>
                    <div><p><b>279,000</b>&nbsp;<sub>تومان</sub></p><span className='badge bg-danger text-white'>35%</span></div>
                    <div>
                        <p className='text-decoration-line-through'>428,000</p>
                    </div>
                </Link>
            </div>
            <div>
                <Link to='/' className='d-block'>
                    <div><img src={picList[3]} alt='amazing request' className='img-fluid' /></div>
                    <div><p><b>279,000</b>&nbsp;<sub>تومان</sub></p><span className='badge bg-danger text-white'>35%</span></div>
                    <div>
                        <p className='text-decoration-line-through'>428,000</p>
                    </div>
                </Link>
            </div>
            <div>
                <Link to='/' className='d-block'>
                    <div><img src={picList[4]} alt='amazing request' className='img-fluid' /></div>
                    <div><p><b>279,000</b>&nbsp;<sub>تومان</sub></p><span className='badge bg-danger text-white'>35%</span></div>
                    <div>
                        <p className='text-decoration-line-through'>428,000</p>
                    </div>
                </Link>
            </div>
            <div>
                <Link to='/' className='d-block'>
                    <div><img src={picList[5]} alt='amazing request' className='img-fluid' /></div>
                    <div><p><b>279,000</b>&nbsp;<sub>تومان</sub></p><span className='badge bg-danger text-white'>35%</span></div>
                    <div>
                        <p className='text-decoration-line-through'>428,000</p>
                    </div>
                </Link>
            </div>
            <div>
                <Link to='/' className='d-block'>
                    <div><img src={picList[6]} alt='amazing request' className='img-fluid' /></div>
                    <div><p><b>279,000</b>&nbsp;<sub>تومان</sub></p><span className='badge bg-danger text-white'>35%</span></div>
                    <div>
                        <p className='text-decoration-line-through'>428,000</p>
                    </div>
                </Link>
            </div>
            <div>
                <Link to='/' className='d-block'>
                    <div><img src={picList[7]} alt='amazing request' className='img-fluid' /></div>
                    <div><p><b>279,000</b>&nbsp;<sub>تومان</sub></p><span className='badge bg-danger text-white'>35%</span></div>
                    <div>
                        <p className='text-decoration-line-through'>428,000</p>
                    </div>
                </Link>
            </div>
            <div>
                <Link to='/' className='d-block'>
                    <div><img src={picList[8]} alt='amazing request' className='img-fluid' /></div>
                    <div><p><b>279,000</b>&nbsp;<sub>تومان</sub></p><span className='badge bg-danger text-white'>35%</span></div>
                    <div>
                        <p className='text-decoration-line-through'>428,000</p>
                    </div>
                </Link>
            </div>
            <div>
                <Link to='/' className='d-block'>
                    <div><img src={picList[9]} alt='amazing request' className='img-fluid' /></div>
                    <div><p><b>279,000</b>&nbsp;<sub>تومان</sub></p><span className='badge bg-danger text-white'>35%</span></div>
                    <div>
                        <p className='text-decoration-line-through'>428,000</p>
                    </div>
                </Link>
            </div>
            <div>
                <Link to='/' className='d-block'>
                    <div><img src={picList[10]} alt='amazing request' className='img-fluid' /></div>
                    <div><p><b>279,000</b>&nbsp;<sub>تومان</sub></p><span className='badge bg-danger text-white'>35%</span></div>
                    <div>
                        <p className='text-decoration-line-through'>428,000</p>
                    </div>
                </Link>
            </div>
            <div>
                <Link to='/' className='d-block'>
                    <div><img src={picList[11]} alt='amazing request' className='img-fluid' /></div>
                    <div><p><b>279,000</b>&nbsp;<sub>تومان</sub></p><span className='badge bg-danger text-white'>35%</span></div>
                    <div>
                        <p className='text-decoration-line-through'>428,000</p>
                    </div>
                </Link>
            </div>
            <div>
                <Link to='/' className='d-block'>
                    <div><img src={picList[12]} alt='amazing request' className='img-fluid' /></div>
                    <div><p><b>279,000</b>&nbsp;<sub>تومان</sub></p><span className='badge bg-danger text-white'>35%</span></div>
                    <div>
                        <p className='text-decoration-line-through'>428,000</p>
                    </div>
                </Link>
            </div>
            <div>
                <Link to='/' className='d-block'>
                    <div><img src={picList[13]} alt='amazing request' className='img-fluid' /></div>
                    <div><p><b>279,000</b>&nbsp;<sub>تومان</sub></p><span className='badge bg-danger text-white'>35%</span></div>
                    <div>
                        <p className='text-decoration-line-through'>428,000</p>
                    </div>
                </Link>
            </div>
            <div>
                <Link to='/' className='d-flex justify-content-center align-items-center h-100'>
                    <div>
                        <i className='bi bi-arrow-left-circle d-block'></i>
                        <p>مشاهده همه</p>
                    </div>
                </Link>
            </div>
        </>
    );
}
export default SlidMenu;