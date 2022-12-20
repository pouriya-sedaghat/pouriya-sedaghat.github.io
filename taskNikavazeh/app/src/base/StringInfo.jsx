const StringInfo = ({ customClass,title, value }) => {
    return (
        <>
            <p className={`${customClass}`}><span>{title} </span><span>{value}</span></p>
        </>
    );
}
export default StringInfo;