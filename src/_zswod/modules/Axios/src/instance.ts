import axios from 'axios';

const api = axios.create({
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json',
  },
});

export { api };
