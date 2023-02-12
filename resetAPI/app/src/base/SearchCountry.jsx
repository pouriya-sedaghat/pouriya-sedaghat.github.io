const SearchCountry = ({ inputMyUser, changeInputMyUser }) => {
    return (
        <>
            <div className='my-2 m-sm-0 d-flex justify-content-between align-items-center overflow-hidden rounded-5'>
                <label htmlFor='country'>
                    <i className='px-3 py-1 bi bi-search'></i>
                </label>
                <input type='text' value={inputMyUser} onChange={changeInputMyUser} className='px-1 py-1 bg-transparent border-0' id='country' placeholder='Search For A Country...' />
            </div>
        </>
    );
}
export default SearchCountry;