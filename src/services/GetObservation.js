import axios from 'axios';

const { REACT_APP_OWM_KEY } = process.env;
const endpoint = (city) => `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${REACT_APP_OWM_KEY}`;

export const getObservation = (city) => axios.get(endpoint(city));
