import axios from 'axios';

export const http = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
});

// export const localHttp = axios.create({
//   baseURL: 'http://localhost:3000/api/'
// });
