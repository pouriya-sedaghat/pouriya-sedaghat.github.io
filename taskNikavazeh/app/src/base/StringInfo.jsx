const StringInfo = ({ title, value }) => {
    return (
        <>
            <p className='my-1'><span>{title} </span><span>{value}</span></p>
        </>
    );
}
export default StringInfo;