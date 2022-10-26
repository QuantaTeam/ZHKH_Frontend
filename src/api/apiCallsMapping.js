/* import * as signActions from '../pages/SignInPage/actions';
import * as signAPI from '../pages/SignInPage/api'; */

const apiCallMaping = (action) => {
  const mapping = {

  };

  if (!mapping.hasOwnProperty(action.type)) {
    throw Error('Not mapped action');
  }

  return mapping[action.type];
};

export default apiCallMaping;