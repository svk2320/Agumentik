import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

export const fetchWebsiteDetails = () => API.get('/');
export const httpSignIn = () => API.get('/');
export const httpSignUp = () => API.get('/');



