import { Link } from 'react-router-dom';
import StringInfo from './StringInfo';
const DefaultRegion = ({ myData, inputMyUser }) => {
    return (
        <>
            {
                myData
                    .filter((item) => item.name.common.toLowerCase().includes(inputMyUser.toLowerCase()) || (inputMyUser === '' && item.name.common)).sort((a, b) => a.name.common > b.name.common ? 1 : -1)
                    .map((item, index) => {
                        const country = { name: item.name.common || '*Not Available*' };
                        const population = { number: item.population && item.population.toLocaleString() || '*Not Available*' };
                        const region = { area: item.region || '*Not Available*' };
                        const capital = { point: item.capital && item.capital.toString() || '*Not Available*' };
                        return (
                            <div className='my-3 rounded-3 overflow-hidden' key={index.toString()}>
                                <Link className='d-block text-decoration-none text-reset' to={`/Region${item.name.common}`}>
                                    <div className='p-2 text-center'><img src={`${item.flags.svg}`} alt={`flag ${item.name.common}`} className='img-fluid' /></div>
                                    <div className='px-4 py-3'>
                                        <b className='d-block py-2'>{country.name}</b>
                                        <StringInfo customClass={'m-0'} title={'population:'} value={population.number} />
                                        <StringInfo customClass={'m-0'} title={'Region:'} value={region.area} />
                                        <StringInfo customClass={'m-0'} title={'Capital:'} value={capital.point} />
                                    </div>
                                </Link>
                            </div>
                        )
                    })
            }
        </>
    );
}
export default DefaultRegion;