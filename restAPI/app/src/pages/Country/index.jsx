import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import BackHomePage from 'base/BackHomePage';
import FlagCountry from 'base/FlagCountry';
import InfoCountry from 'base/InfoCountry';
const Country = () => {
    const { country } = useParams();
    const [data, setData] = useState([]);
    const [myCountry, setMyCountry] = useState('');
    const [myFlag, setMyFlag] = useState('');
    const [nativeName, setNativeName] = useState('');
    const [topLevelDomain, setTopLevelDomain] = useState('');
    const [population, setPopulation] = useState('');
    const [currencies, setCurrencies] = useState('');
    const [region, setRegion] = useState('');
    const [languages, setLanguages] = useState('');
    const [subRegion, setSubRegion] = useState('');
    const [capital, setCapital] = useState('');
    const [borderCountries, setBorderCountries] = useState([]);
    const { mode } = useSelector(state => state.thisMode);
    useEffect(() => {
        getList();
    })
    if (mode === 'Dark Mode') {
        document.body.style.backgroundColor = 'hsl(0, 0%, 98%)';
    }
    else {
        document.body.style.backgroundColor = 'hsl(207, 26%, 17%)';
    }
    const getList = () => {
        axios({ url: 'https://restcountries.com/v3.1/all' })
            .then(({ data }) => {
                setData(data);
                setMyCountry(data.find((item) => item.name.common === country).name.common);
                setMyFlag(data.find((item) => item.name.common === country).flags.svg);
                setNativeName((data.find((item) => item.name.common === country).name.nativeName && Object.values(data.find((item) => item.name.common === country).name.nativeName)[0].common) || '*Not Available*');
                setPopulation((data.find((item) => item.name.common === country).population && data.find((item) => item.name.common === country).population.toLocaleString()) || '*Not Available*');
                setRegion(data.find((item) => item.name.common === country).region || '*Not Available*');
                setSubRegion(data.find((item) => item.name.common === country).subregion || '*Not Available*');
                setCapital((data.find((item) => item.name.common === country).capital && data.find((item) => item.name.common === country).capital.toString()) || '*Not Available*');
                setTopLevelDomain((data.find((item) => item.name.common === country).tld && data.find((item) => item.name.common === country).tld.toString()) || '*Not Available*');
                setCurrencies((data.find((item) => item.name.common === country).currencies && Object.values(data.find((item) => item.name.common === country).currencies)[0].name) || '*Not Available*');
                setLanguages((data.find((item) => item.name.common === country).languages && Object.values(data.find((item) => item.name.common === country).languages).join()) || '*Not Available*');
                setBorderCountries(data.find((item) => item.name.common === country).borders || []);
            })
            .catch((erorr) => { console.log(erorr) })
    }
    return (
        <>
            <Container fluid className={`${mode === 'Dark Mode' ? 'info-country' : 'info-country-dark'}`}>
                <Row>
                    <Col xs={12} className='px-3 py-4 p-sm-5'>
                        <BackHomePage mode={mode} />
                    </Col>
                    <Col xs={12} md={6} className='p-0 d-flex justify-content-center align-items-center'>
                        <FlagCountry myFlag={myFlag} country={country} />
                    </Col>
                    <Col xs={12} md={6} className='p-0'>
                        <InfoCountry data={data} myCountry={myCountry} nativeName={nativeName} topLevelDomain={topLevelDomain} population={population} currencies={currencies} region={region} languages={languages} mode={mode} subRegion={subRegion} capital={capital} borderCountries={borderCountries} />
                    </Col>
                </Row>
            </Container>
        </>
    );
}
export default Country;