import axios from "axios";

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'e38902030017580fbfa1d8a473a3610b';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = { api_key: API_KEY, language: 'en-EN' };

export async function fetchTrandingMovies (page = 1) {
    try {
        
    } catch (error) {
        console.log(error);
        return [];
    }
}