import api from '../../../api/apiConfig';

export const getAllLocations = (query) => api.get(`api/applications/?limit=12${query ? query : ''}`);
export const getLocationByID = (id) => api.get(`api/applications/${id}`);
export const getFilterData = () => api.get('api/applications/meta');