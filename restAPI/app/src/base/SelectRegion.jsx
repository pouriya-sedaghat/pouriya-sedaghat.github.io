const SelectRegion = ({ myToggle, myRegion, stateToggle, setMyRegion }) => {
    const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Filter By Region', 'Oceania'];
    return (
        <>
            <div className='my-2 m-sm-0 px-3 d-flex justify-content-between align-items-center rounded-5' onClick={myToggle}>
                <ul className='m-0 px-0 py-1 d-flex justify-content-between'>
                    <li className='position-relative'>
                        <span className='px-1'>{myRegion}</span>
                        <ol className={`p-0 rounded-2 overflow-hidden position-absolute ${stateToggle ? 'open-ol' : 'close-ol'}`}>
                            {
                                regions.map((item, index) => {
                                    return (
                                        <li key={index.toString()} className={`${myRegion === item ? 'd-none' : ''}`}><span onClick={() => setMyRegion(item)}>{item}</span></li>
                                    );
                                })
                            }
                        </ol>
                    </li>
                    <li><i className={`d-block bi bi-chevron-up px-1 ${stateToggle ? 'rotate' : 'without-rotate'}`}></i></li>
                </ul>
            </div>
        </>
    );
}
export default SelectRegion;