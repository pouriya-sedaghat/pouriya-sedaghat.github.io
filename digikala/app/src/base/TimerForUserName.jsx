import Countdown from 'react-countdown';
const TimerForUserName = ({ thisRefresh, thisSetRefresh, thisOTP, thisSetOTP, thisGeneratePassword }) => {
    const renderer = ({ hours, minutes, seconds, completed }) => {
        if (completed) {
            thisSetOTP(thisGeneratePassword('mix', 9));
            thisSetRefresh(true);
        }
        else {
            return <span className='d-block bg-light my-2 px-2 py-1 border border-danger rounded-5'><p>{hours}:{minutes}:{seconds}</p></span>;
        }
    };
    return (
        <>
            <div className='p-1 m-1 w-25 text-center'>
                {thisRefresh ?
                    <div className='my-1 bg-success rounded-5 overflow-hidden'>
                        <i className="bi bi-arrow-clockwise text-white d-block px-2 py-1" onClick={() => { thisSetRefresh(false) }}></i>
                    </div>
                    :
                    <>
                        <div className='my-2 py-1 bg-secondary border border-2 border-primary rounded-5'>
                            <p className='text-white user-select-none'>{thisOTP}</p>
                        </div>
                        <Countdown date={Date.now() + 90000} renderer={renderer} />
                    </>
                }
            </div>
        </>
    );
}
export default TimerForUserName;