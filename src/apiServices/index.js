import axios from 'axios';

// const baseUrl = 'http://localhost:3000';
const baseUrl = 'https://alldeals12.herokuapp.com';

const get = async url => await axios.get(`${baseUrl + url}`);
const post = async (url, body) => await axios.post(`${baseUrl + url}`, body);

export const getPrograms = async () => await get('/get-programs');

export const getCategories = async () => await get('/get-categories');

export const getFeed = async (body) => await post('/get-feed', body);

export const getFeedCategory = async (body) => await post('/get-feed-category', body);
