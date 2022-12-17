const SelectRegion = ({ myToggle, myRegion, stateToggle, setMyRegion }) => {
    return (
        <>
            <div className='my-2 m-sm-0 px-3 d-flex justify-content-between align-items-center rounded-5' onClick={myToggle}>
                <ul className='m-0 px-0 py-1 d-flex justify-content-between'>
                    <li className='position-relative'>
                        <span className='px-1'>{myRegion}</span>
                        <ol className={`p-0 rounded-2 overflow-hidden position-absolute ${stateToggle ? 'open-ol' : 'close-ol'}`}>
                            <li className={`${myRegion == 'Africa' ? 'd-none' : ''}`}><span onClick={() => setMyRegion('Africa')}>Africa</span></li>
                            <li className={`${myRegion == 'America' ? 'd-none' : ''}`}><span onClick={() => setMyRegion('Americas')}>Americas</span></li>
                            <li className={`${myRegion == 'Asia' ? 'd-none' : ''}`}><span onClick={() => setMyRegion('Asia')}>Asia</span></li>
                            <li className={`${myRegion == 'Europe' ? 'd-none' : ''}`}><span onClick={() => setMyRegion('Europe')}>Europe</span></li>
                            <li className={`${myRegion == 'Filter By Region' ? 'd-none' : ''}`}><span onClick={() => setMyRegion('Filter By Region')}>Filter By Region</span></li>
                            <li className={`${myRegion == 'Oceania' ? 'd-none' : ''}`}><span onClick={() => setMyRegion('Oceania')}>Oceania</span></li>
                        </ol>
                    </li>
                    <li><i className={`d-block bi bi-chevron-up px-1 ${stateToggle ? 'rotate' : 'without-rotate'}`}></i></li>
                </ul>
            </div>
        </>
    );
}
export default SelectRegion;