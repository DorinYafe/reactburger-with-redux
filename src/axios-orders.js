import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://reactburger-f3a2a.firebaseio.com/',
});

export default instance;