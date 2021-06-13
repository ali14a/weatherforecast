import { WEEKLY } from '../../config/api/EndPoint';
import { API_KEY, SERVER_ADDRESS } from '../../config/env/ServerConfig';
import api from '../core/apiInstance';
import { ACTION_CONSTANTS } from './util/Contants';
export const getWeatherData = (lat, lon) => {
  const url =`onecall?exclude=minutely,hourly,alerts&units=metric&lat=${lat}&lon=${lon}&appid=${API_KEY}`
  return {
    type: ACTION_CONSTANTS.GET_WEATHER_DATA,
    payload: api.get(url)
  }
}