import axios from 'axios';

// api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=b3a08718086de16c5d4d700140460b05

export const getCityData = (city) => {
  return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=b3a08718086de16c5d4d700140460b05`);
};
