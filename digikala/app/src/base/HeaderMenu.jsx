import SubMenuInHeader from './SubMenuInHeader';
import { Link } from 'react-router-dom';
const HeaderMenu = ({ thisMyImg, thisChangeMyToggle, thisCity }) => {
    return (
        <>
            <ul className='m-0 p-0 d-flex align-items-center custom-navigatin'>
                <li className='position-reletive'>
                    <Link className='my-0 text-dark fs-6 myDesign'><i className='bi bi-list'></i><p>دسته بندی کالا</p></Link>
                    <SubMenuInHeader thisMyImg={thisMyImg}/>
                </li>
                <li>
                    <Link to='/' className='myDesign'><i className='bi bi-basket2'></i><p>سوپرمارکت</p></Link>
                </li>
                <li>
                    <Link to='/' className='myDesign'><i className='bi bi-fire'></i><p>پرفروش ترین ها</p></Link>
                </li>
                <li>
                    <Link to='/' className='myDesign'><i className='bi bi-percent'></i><p>تخفیفات و پیشنهاد ها</p></Link>
                </li>
                <li>
                    <Link to='/' className='myDesign'><i className='bi bi-balloon-fill'></i><p>شگفت انگیزها</p></Link>
                </li>
                <li>
                    <Link className='custom-curs'><span>|</span></Link>
                </li>
                <li>
                    <Link to='/' className='myDesign'><p>سوالی دارید؟</p></Link>
                </li>
                <li>
                    <Link to='/' className='myDesign'><p>در دیجی کالا بفروشید!</p></Link>
                </li>
                <li className='position-absolute custom-pos' onClick={thisChangeMyToggle}>
                    <Link className='my-0 myDesign'><i className='bi bi-geo-alt'></i>{thisCity}</Link>
                </li>
            </ul>
        </>
    );
}
export default HeaderMenu;