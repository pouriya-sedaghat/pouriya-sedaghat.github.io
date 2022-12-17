import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col } from 'reactstrap';
import { CHANGE_MODE } from '../redux/slices/mode';
const Mode = () => {
    const { mode } = useSelector(state => state.thisMode);
    const dispacher = useDispatch();
    const [classMode, setClassMode] = useState('header');
    const [iconToggle, setIconToggle] = useState('');
    const [buttonToggle, setButtonToggle] = useState('btn-outline-dark');
    const isMode = () => {
        if (mode == 'Dark Mode') {
            dispacher(CHANGE_MODE('Light Mode'));
            setClassMode('header-dark-mode');
            setIconToggle('-fill');
            setButtonToggle('btn-outline-light');
        } else {
            dispacher(CHANGE_MODE('Dark Mode'));
            setClassMode('header');
            setIconToggle('');
            setButtonToggle('btn-outline-dark');
        }
    }
    return (
        <>
            <Row>
                <Col xs={12} className={`px-4 px-sm-5 py-2 d-flex justify-content-between align-items-center shadow-sm ${classMode}`}>
                    <b className='m-0'>Where In The World ?</b>
                    <button className={`btn ${buttonToggle} d-flex rounded-5`} onClick={isMode}><i className={`bi bi-moon${iconToggle} mx-1`}></i> <p className='m-0 mx-1'>{mode}</p></button>
                </Col>
            </Row>
        </>
    );
}
export default Mode;