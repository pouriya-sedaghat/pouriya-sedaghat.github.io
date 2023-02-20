import StringInfo from './StringInfo';
const CreateInfo = ({ myClass, arrInfo }) => {
    return (
        <>
            <div className={`${myClass}`}>
                {
                    arrInfo.map((item, index) => {
                        return (
                            <StringInfo key={index.toString()} customClass={'my-1'} title={item.text} value={item.mount} />
                        );
                    })
                }
            </div>
        </>
    );
}
export default CreateInfo;