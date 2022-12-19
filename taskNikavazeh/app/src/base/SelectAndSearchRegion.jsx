import { Link } from 'react-router-dom';
const SelectAndSearchRegion = ({ myData, myRegion, inputMyUser }) => {
    return (
        <>
            {
                myData
                    .filter(item => item.region == myRegion && item.name.common.toLowerCase().includes(inputMyUser.toLowerCase()) || (inputMyUser === '' && item.region == myRegion)).sort((a, b) => a.name.common > b.name.common ? 1 : -1)
                    .map((item, index) => {
                        const population = { number: item.population.toLocaleString() };
                        return (
                            <div className='my-3' key={index.toString()}>
                                <Link className='d-block text-decoration-none text-reset' to={`/Region${item.name.common}`}>
                                    <div className='p-2 text-center'><img src={`${item.flags.svg}`} alt={`flag ${item.name.common}`} className='img-fluid' /></div>
                                    <div className='px-2 py-3'>
                                        <b className='d-block py-2'>{item.name.common}</b>
                                        <p className='m-0'>population: {population.number}</p>
                                        <p className='m-0'>Region: {item.region}</p>
                                        <p className='m-0'>Capital: {item.capital + ' '}</p>
                                    </div>
                                </Link>
                            </div>
                        );
                    })
            }
        </>
    );
}
export default SelectAndSearchRegion;