import axios from 'axios';

const BASE_URL = 'https://reqres.in/';

const apiInstance = axios.create({
  baseURL: BASE_URL,
});

export default apiInstance;
