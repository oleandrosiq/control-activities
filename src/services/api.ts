import axios from 'axios';

export const api = axios.create({
  baseURL: "https://morning-castle-07644.herokuapp.com/api"
});