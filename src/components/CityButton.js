import { Button, notification } from 'antd';
import { useDispatch } from 'react-redux';
import { getObservation } from '../services/GetObservation';
import convertKelvinToCelsius from './../helpers/Helpers';
import { ThunderboltOutlined } from '@ant-design/icons';
import postObservation from './../services/PostObservation';

const CityButton = ({ city }) => {
  const dispatch = useDispatch();

  const startFetching = () => {
    dispatch({ type: 'FETCH_OBSERVATION' });
  };

  const storeObservation = (newObservation) => {
    dispatch({
      type: 'STORE_FETCHED_OBSERVATION', 
      newObservation 
    });
  };

  const showSuccessNotification = () => {
    notification.success({
      message: 'Informações obtidas com sucesso!',
      placement: 'topRight',
      duration: 3
    });
  };

  const showFailureNotification = () => {
    notification.error({
      message: 'Não foi possível obter as informações',
      placement: 'topRight',
      duration: 3
    });
  };

  const stopFetching = () => {
    dispatch({ type: 'OBSERVATION_FETCHING_ERROR'} );
  };

  const handleClick = (city) => {
    startFetching();
    getObservation(city)
      .then((response) => {
        const { temp, temp_min, temp_max } = response.data.main;
        const { icon } = response.data.weather[0];
        const newObservation = {
          city,
          temp: convertKelvinToCelsius(temp),
          min: convertKelvinToCelsius(temp_min),
          max: convertKelvinToCelsius(temp_max)
        };

        postObservation(newObservation)
          .then(() => {
            storeObservation({
              ...newObservation,
              icon
            });
            showSuccessNotification();
          })
          .catch(() => {
            showFailureNotification();
            stopFetching();
          })
      })
      .catch((err) => {
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
      style={{ margin: '0 10px' }} 
    >
      {city}
    </Button>
  );
};

export default CityButton;
