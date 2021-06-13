import { getCorrectConstant } from '../../utils/ActionConstants';

export const ACTION_CONSTANTS = {
  GET_WEATHER_DATA:'GET_WEATHER_DATA'
}; 
export const GET_WEATHER_DATA = (type) => {
  return getCorrectConstant(ACTION_CONSTANTS.GET_WEATHER_DATA, type);
};
