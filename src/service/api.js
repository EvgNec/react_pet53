import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3';


  export const getTrend = async () => {
    const response = await axios.get('/trending/all/day', {
      params: {
        api_key: '708f0b64505f12eb8c20b5a01361fdf3',
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
