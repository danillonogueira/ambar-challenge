import { Row, Col, Button } from 'antd';
import Display from './../components/Display';
import { getCityData } from './../services/Get';
import { useSelector, useDispatch } from 'react-redux';

const Home = () => {
  const observation = useSelector(state => state.observation);
  const hasObservation = useSelector(state => state.hasObservation);
  const dispatch = useDispatch();

  const storeObservation = function(newObservation) {
    dispatch({ type: 'STORE_OBSERVATION', newObservation });
  };

  const handleClick = function(city) {
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
      })
      .finally(() => {
        console.log(observation, hasObservation);
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
      {
        hasObservation && (
          <Display 
            local={observation.city} 
            current={observation.temp} 
            max={observation.max} 
            min={observation.min} 
          />
        )
      }
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