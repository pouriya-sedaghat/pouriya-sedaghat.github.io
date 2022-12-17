import { Link } from 'react-router-dom';
const DefaultRegion = ({ myData, inputMyUser }) => {
    return (
        <>
            {
                myData
                    .filter((item) => item.name.common.toLowerCase().includes(inputMyUser.toLowerCase()) || (inputMyUser === '' && item.name.common)).sort((a, b) => a.name.common > b.name.common ? 1 : -1)
                    .map((item, index) => {
                        return (
                            <div className='my-3 rounded-3 overflow-hidden' key={index.toString()}>
                                <Link className='d-block text-decoration-none text-reset' to={`/Region${item.name.common}`}>
                                    <div className='p-2 text-center'><img src={`${item.flags.svg}`} alt={`flag ${item.name.common}`} className='img-fluid' /></div>
                                    <div className='px-4 py-3'>
                                        <b className='d-block py-2'>{item.name.common}</b>
                                        <p className='m-0'>population: {item.population}</p>
                                        <p className='m-0'>Region: {item.region}</p>
                                        <p className='m-0'>Capital: {item.capital + ' '}</p>
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