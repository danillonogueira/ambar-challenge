import { Button } from 'antd';
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

  const wrapObservationData = (tempData) => {
    const { temp, temp_min, temp_max } = tempData;

    return {
      temp: convertKelvinToCelsius(temp),
      min: convertKelvinToCelsius(temp_min),
      max: convertKelvinToCelsius(temp_max)
    };
  };

  const handleClick = (city) => {
    startFetching();
    getCityData(city)
      .then((response) => {     
        storeObservation({
          ...wrapObservationData(response.data.main),
          city
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Button 
      type="primary" 
      size="large"
      onClick={() => handleClick(city)}
      style={{ 
        margin: '0 10px',
      }}
      icon={<ThunderboltOutlined />}
    >
      {city}
    </Button>
  );
};

export default CityButton;
