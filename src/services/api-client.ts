import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
    
        key: 'bf9ff5893a6c45b18d275642e2a73382'
    }
})