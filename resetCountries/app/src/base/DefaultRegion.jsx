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
                        const info = [{ text: 'population:', mount: (item.population && item.population.toLocaleString()) || '*Not Available*' }, { text: 'Region:', mount: item.region || '*Not Available*' }, { text: 'Capital:', mount: (item.capital && item.capital.toString()) || '*Not Available*' }];
                        return (
                            <div className='my-3 rounded-3 overflow-hidden' key={index.toString()}>
                                <Link className='d-block text-decoration-none text-reset' to={`/Region${item.name.common}`}>
                                    <div className='p-2 text-center'>
                                        <img src={`${item.flags.svg}`} alt={`flag ${item.name.common}`} className='img-fluid' />
                                    </div>
                                    <div className='px-4 py-3'>
                                        <b className='d-block py-2'>{country.name}</b>
                                        {
                                            info.map((item, index) => {
                                                return (
                                                    <StringInfo key={index.toString()} customClass={'m-0'} title={item.text} value={item.mount} />
                                                );
                                            })
                                        }
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