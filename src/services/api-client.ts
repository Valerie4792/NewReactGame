import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api/',
    params: {
        key:'0d85e2e72b204a44b77634b76ab4e985'
    }
})
