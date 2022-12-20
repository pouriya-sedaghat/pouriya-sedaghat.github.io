import BorderButton from './BorderButton';
import StringInfo from './StringInfo';
const InfoCountry = ({ data, myCountry, nativeName, topLevelDomain, population, currencies, region, languages, keys, subRegion, capital, mode, borderCountries }) => {
    return (
        <>
            <div>
                <h3 className='m-4 m-sm-5 m-md-3 m-lg-4 m-xxl-5'>{myCountry}</h3>
            </div>
            <div className='d-sm-flex flex-sm-wrap justify-content-sm-around justify-content-md-evenly justify-content-lg-between px-lg-5 align-content-sm-center'>
                <div className='mx-4 m-sm-0'>
                    <StringInfo title={'Native Name:'} value={nativeName} />
                    <StringInfo title={'Population:'} value={population} />
                    <StringInfo title={'Region:'} value={region} />
                    <StringInfo title={'Sub Region:'} value={subRegion} />
                    <StringInfo title={'Capital:'} value={capital} />
                </div>
                <div className='m-4 m-sm-0'>
                    <StringInfo title={'Top Level Domain:'} value={topLevelDomain} />
                    <StringInfo title={'Currencies:'} value={currencies} />
                    <StringInfo title={'Languages:'} value={languages[keys[0]] + (languages[keys[1]] && ',' + languages[keys[1]] || '') + (languages[keys[2]] && ',' + languages[keys[2]] || '')} />
                </div>
            </div>
            <div>
                <p className='mx-4 m-sm-5 m-md-3 m-lg-4 m-xxl-5'>
                    <span className='d-block my-1 my-sm-0 d-sm-inline d-md-block my-md-1 my-lg-0 d-lg-inline'>Border Countries:</span>
                    <BorderButton mode={mode} data={data} borderCountry={borderCountries} />
                </p>
            </div>
        </>
    );
}
export default InfoCountry;