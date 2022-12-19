import PasswordForNewUser from './PasswordForNewUser';
import OpenTimer from './OpenTimer';
import Validation from './Validation';
const AboutPassword = ({thisIsUser, thisIsNewUser, thisRefresh, thisSetRefresh, thisOTP, thisSetOTP, thisGeneratePassword, thisOpenTimer, thisSetOpenTimer, thisVal, thisIsValid, thisValid}) => {
    return (
        <>
            {thisIsUser ?
                (thisIsNewUser ?
                    <PasswordForNewUser thisRefresh={thisRefresh} thisSetRefresh={thisSetRefresh} thisOTP={thisOTP} thisSetOTP={thisSetOTP} thisGeneratePassword={thisGeneratePassword} />
                    :
                    <OpenTimer thisOpenTimer={thisOpenTimer} thisRefresh={thisRefresh} thisSetRefresh={thisSetRefresh} thisOTP={thisOTP} thisSetOTP={thisSetOTP} thisGeneratePassword={thisGeneratePassword} thisSetOpenTimer={thisSetOpenTimer} />
                )
                :
                <Validation thisVal={thisVal} thisIsValid={thisIsValid} thisValid={thisValid} />
            }
        </>
    );
}
export default AboutPassword;