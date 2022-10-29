import api from '../../../api/apiConfig';

export const getAllLocations = () => api.get('api/applications/anomalies');
export const getLocationByID = (id) => api.get(`api/applications/${id}`);