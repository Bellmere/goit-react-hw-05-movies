import axios from "axios";

const AXIOS = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
      api_key: 'e38902030017580fbfa1d8a473a3610b',
      language: 'en-US',
    },
  });

  async function fetchTrendingMovies() {
    return await AXIOS.get(`trending/all/day`).then(res => res.data);
  }

  export {
    fetchTrendingMovies,
  }