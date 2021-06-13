import {
  GET_WEATHER_DATA,
} from './util/Contants';
import { CONSTANT_TYPES } from './../utils/ActionConstants'

const initialState = {
  weatherData: {},
  pending: false,
  success: false,
  error: false,
  errorMsg: '',
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_WEATHER_DATA(CONSTANT_TYPES.PENDING): {
      return {
        ...state,
        pending: true
      }
    }
    case GET_WEATHER_DATA(CONSTANT_TYPES.REJECTED): {
      return {
        ...state,
        error: true,
        pending: false,
        success: false,
        errorMsg: 'Something Went Wrong at our End'
      }
    }
    case GET_WEATHER_DATA(CONSTANT_TYPES.FULFILLED): {
      return {
        ...state,
        success: true,
        pending: false,
        error: false,
        errorMsg: '',
        weatherData: action.payload.data
      }
    }
    default:
      return state
  }
}
