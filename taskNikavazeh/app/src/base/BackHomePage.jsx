import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
const BackHomePage = ({ mode }) => {
    return (
        <>
            <Button color={`${mode == 'Dark Mode' ? 'outline-dark' : 'outline-light'}`} className='p-0 shadow-sm'>
                <Link to='/' className='px-2 py-1 d-flex text-decoration-none text-reset'>
                    <i className='mx-1 bi bi-arrow-left'></i>
                    <p className='mx-1 my-0'>Back</p>
                </Link>
            </Button>
        </>
    );
}
export default BackHomePage;