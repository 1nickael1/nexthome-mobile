import axios from 'axios';

const api = axios.create({
  baseURL: 'https://nexthome-back.herokuapp.com/',
});

export default api;
