import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';
const OffProduction = ({ myPic }) => {
    return (
        <>
            <Col lg={6} className='p-0'>
                <Link to='/' className='p-2 d-flex h-100 text-decoration-none align-items-center'>
                    <div><img src={myPic[0]} alt="fresh" className="img-fluid" /></div>
                    <div><img src={myPic[1]} alt="fresh" className="img-fluid" /></div>
                    <div><b className='rounded-5 py-1 px-3 px-lg-1 px-xl-3 d-none d-sm-block'>تا 29% تخفیف</b></div>
                </Link>
            </Col>
            <Col lg={4} className='p-0'>
                {/* Link Nesting ==> css 6231 ... */}
                <span className='p-2 d-flex h-100 text-decoration-none justify-content-end align-items-center'>
                    <div className='overflow-hidden rounded-circle bg-white border d-none d-sm-block'>
                        <Link to='/' className='d-block p-2'><img src={myPic[2]} alt="production" className="img-fluid" /></Link>
                    </div>
                    <div className='overflow-hidden rounded-circle bg-white border'>
                        <Link to='/' className='d-block p-2'><img src={myPic[3]} alt="production" className="img-fluid" /></Link>
                    </div>
                    <div className='overflow-hidden rounded-circle bg-white border d-none d-sm-block d-lg-none d-xl-block'>
                        <Link to='/' className='d-block p-2'><img src={myPic[4]} alt="production" className="img-fluid" /></Link>
                    </div>
                    <div className='overflow-hidden rounded-circle bg-white border'>
                        <Link to='/' className='d-block p-2'><img src={myPic[5]} alt="production" className="img-fluid" /></Link>
                    </div>
                    <div className='overflow-hidden rounded-circle bg-white border'>
                        <Link to='/' className='d-block p-2'><img src={myPic[6]} alt="production" className="img-fluid" /></Link>
                    </div>
                    <div className='overflow-hidden rounded-circle bg-white border'>
                        <Link to='/' className='d-block p-2'><img src={myPic[7]} alt="production" className="img-fluid" /></Link>
                    </div>
                </span>
            </Col>
            <Col lg={2} className='p-0'>
                <Link to='/' className='p-2 d-flex h-100 text-decoration-none justify-content-center align-items-center'>
                    <div className='py-2 px-3 rounded-5 bg-white border'>
                        <b className='m-1 text-success'>بیش از 100 کالا</b><i className="bi bi-arrow-left m-1 text-success fw-bold"></i>
                    </div>
                </Link>
            </Col>
        </>
    );
}
export default OffProduction;