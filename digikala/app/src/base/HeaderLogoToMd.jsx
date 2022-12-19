import { Link } from 'react-router-dom';
const HeaderLogoToMd = ({ myPic, thisChangeToggle, thisChangeInfoToggle }) => {
    return (
        <>
            <i className='bi bi-list p-1 custom-icon' onClick={thisChangeToggle}></i>
            <div><Link to='/' className='d-block h-100'><img src={myPic[0]} className='d-block h-100' /></Link></div>
            <i className="bi bi-question-square p-1 custom-icon" onClick={thisChangeInfoToggle}></i>
        </>
    );
}
export default HeaderLogoToMd;