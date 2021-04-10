import { Button, notification } from 'antd';
import { useDispatch } from 'react-redux';
import { getCityData } from '../services/Services';
import convertKelvinToCelsius from './../helpers/Helpers';
import { ThunderboltOutlined } from '@ant-design/icons';

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

  const wrapObservationData = (response) => {
    const { temp, temp_min, temp_max } = response.data.main;
    const { icon } = response.data.weather[0];

    return {
      temp: convertKelvinToCelsius(temp),
      min: convertKelvinToCelsius(temp_min),
      max: convertKelvinToCelsius(temp_max),
      icon
    }
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

  const handleClick = (city) => {
    startFetching();
    getCityData(city)
      .then((response) => {
        storeObservation({
          ...wrapObservationData(response),
          city
        });
        showSuccessNotification();
      })
      .catch((err) => {
        showFailureNotification();
      });
  };

  return (
    <Button 
      type="primary"
      icon={<ThunderboltOutlined />}
      size="large"
      onClick={() => handleClick(city)}
      style={{ 
        margin: '0 10px',
      }} 
    >
      {city}
    </Button>
  );
};

export default CityButton;
