import { Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getObservation } from '../services/GetObservation';
import { convertKelvinToCelsius } from '../helpers/Filters';
import { ThunderboltOutlined } from '@ant-design/icons';
import { postObservation } from './../services/Firebase';
import { showSuccessNotification, showFailureNotification, showWarningNotification } from './../helpers/Notifications';

const CityButton = ({ city }) => {
  const { isLoading } = useSelector(state => state.temperatures);
  const dispatch = useDispatch();

  const startFetching = () => {
    dispatch({ type: 'FETCH_DATA' });
  };

  const storeObservation = (newObservation) => {
    dispatch({
      type: 'STORE_FETCHED_OBSERVATION', 
      newObservation 
    });
  };

  const stopFetching = () => {
    dispatch({ type: 'OBSERVATION_FETCHING_ERROR'});
  };

  const filterCityData = (data) => {
    const { temp, temp_min, temp_max } = data;

    return {
      city,
      temp: convertKelvinToCelsius(temp),
      min: convertKelvinToCelsius(temp_min),
      max: convertKelvinToCelsius(temp_max)
    };
  };

  const handleClick = (city) => {
    startFetching();
    getObservation(city)
      .then((response) => {
        const { data } = response;
        const { icon } = data.weather[0];
        const newObservation = filterCityData(data.main);
        
        postObservation(newObservation)
          .then(() => showSuccessNotification())
          .catch(() => {
            showWarningNotification();
            stopFetching();
          })
          .finally(() => {
            storeObservation({
              ...newObservation,
              icon
            });
          });
      })
      .catch(() => {
        showFailureNotification();
        stopFetching();
      });
  };

  return (
    <Button 
      type="primary"
      icon={<ThunderboltOutlined />}
      size="large"
      onClick={() => handleClick(city)}
      block
      style={{ minWidth: 200 }}
      disabled={isLoading}
    >
      {city}
    </Button>
  );
};

export default CityButton;
