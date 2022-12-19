import { configs } from './../configs/configs';
import axios from 'axios';
export const query = ({ urls, ...other }) => (
    axios({ url: configs.BASE_URL + urls, ...other })
)