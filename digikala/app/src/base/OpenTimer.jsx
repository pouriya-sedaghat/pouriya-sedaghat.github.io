import TimerForUserName from './TimerForUserName';
import WithOutTimer from './WithOutTimer';
const OpenTimer = ({ thisOpenTimer, thisRefresh, thisSetRefresh, thisOTP, thisSetOTP, thisGeneratePassword, thisSetOpenTimer }) => {
    return (
        <>
            {thisOpenTimer ?
                <TimerForUserName thisRefresh={thisRefresh} thisSetRefresh={thisSetRefresh} thisOTP={thisOTP} thisSetOTP={thisSetOTP} thisGeneratePassword={thisGeneratePassword} />
                :
                <WithOutTimer thisSetOpenTimer={thisSetOpenTimer} />
            }

        </>
    );
}
export default OpenTimer;