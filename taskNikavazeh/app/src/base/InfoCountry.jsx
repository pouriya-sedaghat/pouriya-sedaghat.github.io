import BorderButton from './BorderButton';
import CreateInfo from './CreateInfo';
const InfoCountry = ({ data, myCountry, nativeName, topLevelDomain, population, currencies, region, languages, subRegion, capital, mode, borderCountries }) => {
    const infoOne = [{ text: 'Native Name:', mount: nativeName }, { text: 'Population:', mount: population }, { text: 'Region:', mount: region }, { text: 'Sub Region:', mount: subRegion }, { text: 'Capital:', mount: capital }];
    const infoTwo = [{ text: 'Top Level Domain:', mount: topLevelDomain }, { text: 'Currencies:', mount: currencies }, { text: 'Languages:', mount: languages }];
    return (
        <>
            <div>
                <h3 className='m-4 m-sm-5 m-md-3 m-lg-4 m-xxl-5'>{myCountry}</h3>
            </div>
            <div className='d-sm-flex flex-sm-wrap justify-content-sm-around justify-content-md-evenly justify-content-lg-between px-lg-5 align-content-sm-center'>
                <CreateInfo myClass={'mx-4 m-sm-0'} arrInfo={infoOne} />
                <CreateInfo myClass={'m-4 m-sm-0'} arrInfo={infoTwo} />
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