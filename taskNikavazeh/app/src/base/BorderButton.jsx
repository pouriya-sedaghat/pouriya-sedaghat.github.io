import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
const BorderButton = ({ data, mode, borderCountry }) => {
    return (
        <>
            {
                borderCountry.map((item, index) => {
                    const isCountry = data.find((fifa) => fifa.cca3 == item).name.common;
                    return (
                        <Button key={index.toString()} color={`${mode == 'Dark Mode' ? 'outline-secondary' : 'outline-light'}`} className='p-0 m-1'>
                            <Link className='d-block text-decoration-none text-reset px-2 py-1' to={`/Region${isCountry}`}>{isCountry}</Link>
                        </Button>
                    );
                })
            }
        </>
    );
}
export default BorderButton;