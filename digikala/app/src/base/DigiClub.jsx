import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';
const DigiClub = ({ bgs }) => {
    return (
        <>
            <Col lg={4} className='d-flex align-items-center'>
                <div><Link to='/Login' className='d-block'><img src={bgs[0]} alt="digi club" className='img-fluid' /></Link></div>
            </Col>
            <Col lg={8} className='d-flex justify-content-evenly px-1 align-items-lg-center align-content-center'>
                <div className='overflow-hidden bg-white'>
                    <Link to='/Login' className='text-decoration-none d-sm-flex justify-content-between h-100 align-items-center'>
                        <div className='text-center text-sm-center'><i className="mx-1 bi bi-dice-5 text-info"></i><b>چرخ و بخت</b></div>
                        <div className='mx-auto mx-sm-0'><img src={bgs[1]} alt="چرخ و بخت" className='img-fluid' /></div>
                    </Link>
                </div>
                <div className='overflow-hidden bg-white'>
                    <Link to='/Login' className='text-decoration-none d-sm-flex justify-content-between h-100 align-items-center'>
                        <div className='text-center text-sm-center'><i className="mx-1 bi bi-bullseye text-info"></i><b>ماموریت ها</b></div>
                        <div className='mx-auto mx-sm-0'><img src={bgs[2]} alt="ماموریت ها" className='img-fluid' /></div>
                    </Link>
                </div>
                <div className='overflow-hidden bg-white'>
                    <Link to='/Login' className='text-decoration-none d-sm-flex justify-content-between h-100 align-items-center'>
                        <div className='text-center text-sm-center'><i className="mx-1 bi bi-box-seam text-info"></i><b>جایزه ها</b></div>
                        <div className='mx-auto mx-sm-0'><img src={bgs[3]} alt="جایزه ها" className='img-fluid' /></div>
                    </Link>
                </div>
            </Col>
        </>
    );
}
export default DigiClub;