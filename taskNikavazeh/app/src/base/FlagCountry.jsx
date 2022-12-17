const FlagCountry = ({ myFlag, country }) => {
    return (
        <>
            <img src={`${myFlag}`} alt={`flag ${country}`} className='d-block w-75' />
        </>
    );
}
export default FlagCountry;