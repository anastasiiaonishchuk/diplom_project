import axios from 'axios';

/*import { apiPrefix } from '../../etc/config.json';*/

export default {
    listTests() {
        return axios.get(`${/*apiPrefix*/"http://localhost:8090"}/tests`);
    }
}