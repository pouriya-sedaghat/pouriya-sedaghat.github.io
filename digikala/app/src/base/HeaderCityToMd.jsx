const HeaderCityToMd = ({ thisCity }) => {
    return (
        <>
            <p><i className='bi bi-geo-alt text-warning mx-1'></i><span>{thisCity}</span></p>
            <i className='bi bi-chevron-left'></i>
        </>
    );
}
export default HeaderCityToMd;