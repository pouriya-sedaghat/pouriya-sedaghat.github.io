import axios from "axios";
import { useState, useEffect } from "react";
import { Container, Row, Col } from 'reactstrap';
import { useToggle } from 'hooks/useToggle';
import { useSelector } from 'react-redux';
import { useOnChangeHandler } from 'hooks/useOnChangeHandler';
import SelectRegion from 'base/SelectRegion';
import SearchCountry from 'base/SearchCountry';
import DefaultRegion from 'base/DefaultRegion';
import SelectAndSearchRegion from 'base/SelectAndSearchRegion';
const Home = () => {
    const [data, setData] = useState([]);
    const [toggle, changeToggle, setToggle] = useToggle(false);
    const [region, setRegion] = useState('Filter By Region');
    const { mode } = useSelector(state => state.thisMode);
    const [inputUser, changeInputUser, setInputUser] = useOnChangeHandler('');
    useEffect(() => {
        getData();
    }, []);
    if (mode == 'Dark Mode') {
        document.body.style.backgroundColor = 'hsl(0, 0%, 98%)';
    }
    else {

        document.body.style.backgroundColor = 'hsl(207, 26%, 17%)';
    }
    const getData = () => {
        axios({ url: 'https://restcountries.com/v3.1/all' })
            .then(({ data }) => {
                setData(data);
            })
            .catch((erorr) => { console.log(erorr) })
    }
    return (
        <>
            <Container fluid className={`${mode == 'Dark Mode' ? 'my-input' : 'my-input-dark'}`}>
                <Row>
                    <Col xs={12} className='px-sm-5 py-sm-4 d-sm-flex justify-content-sm-between'>
                        <SearchCountry inputMyUser={inputUser} changeInputMyUser={changeInputUser} />
                        <SelectRegion myToggle={changeToggle} stateToggle={toggle} myRegion={region} setMyRegion={setRegion} />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} className='p-0 d-flex flex-wrap justify-content-evenly align-content-center'>
                        {
                            region == 'Filter By Region' ?
                                <DefaultRegion myData={data} inputMyUser={inputUser} />
                                :
                                <SelectAndSearchRegion myData={data} myRegion={region} inputMyUser={inputUser} />
                        }
                    </Col>
                </Row>
            </Container>
        </>
    );
}
export default Home;