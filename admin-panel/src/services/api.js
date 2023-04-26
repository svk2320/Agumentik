import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

export const fetchWebsiteDetails = () => API.get('/');

export const updateSocialMediaLinks = (data) => API.patch(`/admin/socialMediaLinks`, data);

// export const postNewCustomerDetail = (data) => API.post('/', data);
// export const deleteCustomerDetail = (id) => API.delete(`/${id}`);