import axios from 'axios';

const endpoint = (city) => `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=b3a08718086de16c5d4d700140460b05`;

export const getObservation = (city) => axios.get(endpoint(city));
