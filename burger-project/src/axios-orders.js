import axios from 'axios';

const instance = axios.create({
    baseURL:'https://burger-project-b38f3.firebaseio.com/'
});

export default instance;