const LoginLogo = ({ myImg, thisIsUser, thisSetIsUser }) => {
    return (
        <>
            <div className='d-flex justify-content-center position-relative'>
                <div className='w-25'>
                    <img src={`${myImg}`} alt="digiLogo" className='img-fluid' />
                </div>
                <div className='position-absolute'>
                    {thisIsUser ?
                        <i className="bi bi-arrow-right" onClick={() => { thisSetIsUser(false) }}></i>
                        :
                        <i className="bi bi-arrow-right d-none"></i>
                    }
                </div>
            </div>
        </>
    );
}
export default LoginLogo;