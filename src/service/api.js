import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getTrend = async values => {
    const response = await axios.post('trending/all/', values);
    return response.data;
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
