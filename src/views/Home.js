import { Row, Col, Button } from 'antd';
import Display from './../components/Display';
import { getCityData } from '../services/GetCityData';
import { useSelector, useDispatch } from 'react-redux';

const Home = () => {
  const observation = useSelector(state => state.observation);
  const isLoading = useSelector(state => state.isLoading)
  const hasObservation = useSelector(state => state.hasObservation);
  const dispatch = useDispatch();

  const storeObservation = (newObservation) => {
    dispatch({ type: 'STORE_OBSERVATION', newObservation });
  };

  const handleClick = (city) => {
    dispatch({ type: 'FETCH_DATA'});

    getCityData(city)
      .then((response) => {
        const { temp, temp_min, temp_max } = response.data.main;
        
        storeObservation({
          city,
          temp,
          min: temp_min,
          max: temp_max
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Row>
        <Col span={24}>
          <Button 
            type="primary" 
            size="large"
            onClick={() => handleClick('Ribeirão Preto')}
          >
            Ribeirão Preto
          </Button>
          <Button 
            type="primary" 
            size="large"
            onClick={() => handleClick('Araraquara')}
          >
            Araraquara
          </Button>
          <Button 
            type="primary" 
            size="large"
            onClick={() => handleClick('São Carlos')}
          >
            São Carlos
          </Button>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          { isLoading && <span>Buscando informações da cidade...</span> }
          {
            (hasObservation && !isLoading) && (
              <Display 
                local={observation.city} 
                current={observation.temp} 
                max={observation.max} 
                min={observation.min} 
              />
            )
          }
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Button 
            type="primary" 
            size="large"
          >
            Mostrar Mín/Máx
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default Home;