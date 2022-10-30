import * as homeActions from '../pages/HomePage/actions';
import * as homeAPI from '../pages/HomePage/api';

const apiCallMaping = (action) => {
  const mapping = {
    [homeActions.GET_ALL_LOCATIONS_REQUEST]: homeAPI.getAllLocations,
    [homeActions.GET_LOCATION_BY_ID_REQUEST]: homeAPI.getLocationByID,
  };

  if (!mapping.hasOwnProperty(action.type)) {
    throw Error('Not mapped action');
  }

  return mapping[action.type];
};

export default apiCallMaping;