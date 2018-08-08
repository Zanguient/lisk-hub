import actionTypes from '../../constants/actions';

// load setting data from localStorage if it exists
const initialState = JSON.parse(localStorage.getItem('settings')) || {
  advancedMode: false,
  autoLog: true,
  onBoarding: localStorage.getItem('onboarding') !== 'false',
  showNetwork: false,
  channels: {
    academy: false,
    twitter: true,
    blog: false,
    github: false,
    reddit: false,
  },
};

/**
 *
 * @param {Array} state
 * @param {Object} action
 */
const settings = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.settingsUpdated:
      return Object.assign({}, state, action.data);
    case actionTypes.settingsReset:
      return Object.assign({}, state, {
        advancedMode: false,
        autoLog: true,
      });
    case actionTypes.switchChannel:
      return {
        ...state,
        channels: {
          ...state.channels,
          [action.data.name]: action.data.value,
        },
      };
    default:
      return state;
  }
};

export default settings;
