import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
const InfoCountry = ({ country, nativeName, topLevelDomain, population, currencies, region, languages, keys, subRegion, capital, mode, borderCountries }) => {
    return (
        <>
            <div>
                <h3 className='m-4 m-sm-5 m-md-3 m-xl-4  m-xxl-5'>{country}</h3>
            </div>
            <div className='d-sm-flex flex-sm-wrap justify-content-sm-around justify-content-md-evenly justify-content-lg-between px-lg-5 align-content-sm-center'>
                <div className='mx-4 m-sm-0'>
                    <p className='my-1'><span>Native Name: </span><span>{nativeName}</span></p>
                    <p className='my-1'><span>Population: </span><span>{population}</span></p>
                    <p className='my-1'><span>Region: </span><span>{region}</span></p>
                    <p className='my-1'><span>Sub Region: </span><span>{subRegion}</span></p>
                    <p className='my-1'><span>Capital: </span><span>{capital}</span></p>
                </div>
                <div className='m-4 m-sm-0'>
                    <p className='my-1'><span>Top Level Domain: </span><span>{topLevelDomain}</span></p>
                    <p className='my-1'><span>Currencies: </span><span>{currencies}</span></p>
                    <p className='my-1'><span>Languages: </span><span>{languages[keys[0]] + (languages[keys[1]] && ',' + languages[keys[1]] || '') + (languages[keys[2]] && ',' + languages[keys[2]] || '')}</span></p>
                </div>
            </div>
            <div>
                <p className='mx-4 m-sm-5 m-md-3 m-xl-4  m-xxl-5'>
                    <span className='d-block my-1 my-sm-0 d-sm-inline d-md-block my-md-1 my-lg-0 d-lg-inline'>Border Countries:</span>
                    <Button color={`${mode == 'Dark Mode' ? 'outline-secondary' : 'outline-light'}`} className='p-0 mx-1'>
                        <Link className='d-block text-decoration-none text-reset px-2 py-1' target='_blank' to='/RegionFrance'>France</Link>
                    </Button>
                    <Button color={`${mode == 'Dark Mode' ? 'outline-secondary' : 'outline-light'}`} className='p-0 mx-1'>
                        <Link className='d-block text-decoration-none text-reset px-2 py-1' target='_blank' to='/RegionGermany'>Germany</Link>
                    </Button>
                    <Button color={`${mode == 'Dark Mode' ? 'outline-secondary' : 'outline-light'}`} className='p-0 mx-1'>
                        <Link className='d-block text-decoration-none text-reset px-2 py-1' target='_blank' to='/RegionNetherlands'>Netherlands</Link>
                    </Button>
                </p>
            </div>
        </>
    );
}
export default InfoCountry;