import { useParams } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import MySpinner from './../../base/MySpinner';
import InformationOfUser from './../../base/InformationOfUser';
const Accont = () => {
    const { user_id } = useParams();
    const [myUsers, setMyUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        getData();
    }, []);
    const getData = () => {
        setLoading(true);
        axios({ url: 'http://localhost:8080/users' })
            .then(({ data }) => {
                setMyUsers(data);
                setLoading(false);
            })
            .catch((erorr) => { console.log(erorr) })
    }
    const infoUser = myUsers.find((user) => user.id == user_id) || '';
    const edit = () => {
        infoUser.first_name = window.prompt('Edit : First Name', infoUser.first_name);
        infoUser.last_name = window.prompt('Edit : Last Name', infoUser.last_name);
        infoUser.password = window.prompt('Edit : Password', infoUser.password);
        infoUser.phone_number = window.prompt('Edit : Phone Number', infoUser.phone_number);
        infoUser.email = window.prompt('Edit : Email', infoUser.email);
        putData(user_id, infoUser.first_name, infoUser.last_name, infoUser.password, infoUser.phone_number, infoUser.email);
    }
    const putData = async (id, first_name, last_name, password, phone_number, email) => {
        try {
            setLoading(true);
            await axios({ url: `http://localhost:8080/users/${id}`, method: 'PUT', data: { first_name, last_name, password, phone_number, email } })
            getData();
            setLoading(false);
        } catch (erorr) { console.log(erorr) }
    }
    const deleteAccont = async id => {
        try {
            await axios({ url: `http://localhost:8080/users/${id}`, method: 'DELETE' })
            getData();
        } catch (erorr) { console.log(erorr) }
    }
    return (
        <>
            {loading ? <MySpinner /> :
                <InformationOfUser thisInfoUser={infoUser} thisEdit={edit} thisDeleteAccont={deleteAccont} thisUserId={user_id} />
            }
        </>
    );
}
export default Accont;