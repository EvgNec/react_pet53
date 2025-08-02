import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const APY_KEY='708f0b64505f12eb8c20b5a01361fdf3'

  export const getTrend = async () => {
    const response = await axios.get('/trending/all/day', {
      params: {
        api_key: APY_KEY,
      },
    });
    return response.data.results;
  }; 
  
  export const getMovie = async (movie_id) => {
    console.log("🚀 ~ getMovie ~ id:", movie_id)
    const response = await axios.get(`/movie/${movie_id}`, {
      params: {
        api_key: APY_KEY,
      },
    });
    return response.data;
  }; 

  export const getSearchMovie = async (search) => {
    const response = await axios.get(`/search/movie`, {
      params: {
        api_key: APY_KEY,
        query:`${search}`
      },
    });
    return response.data;
  }; 

  export const Reviews = async (movie_id) => {
    const response = await axios.get(`/movie/${movie_id}/reviews`, {
      params: {
        api_key: APY_KEY,
      },
    });
    return response.data.results;
  }; 

  export const Cast = async (movie_id) => {
    const response = await axios.get(`/movie/${movie_id}/credits`, {
      params: {
        api_key: APY_KEY,
      },
    });
    return response.data.results;
  }; 



  export const getMaterials = async () => {
    const response = await axios.get('/materials');
    return response.data;
  };
  
  export const deleteMaterial = async id => {
    const response = await axios.delete(`/materials/${id}`);
    return response.data;
  };
  
  export const updateMaterial = async fields => {
    const response = await axios.put(`/materials/${fields.id}`, fields);
    return response.data;
  };
