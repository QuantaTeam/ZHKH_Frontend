import api from '../../../api/apiConfig';

export const getAllLocations = () => api.get('api/applications/anomalies');