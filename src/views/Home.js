import { Row, Col, Button, Spin, Card } from 'antd';
import { getCityData } from '../services/Services';
import { useSelector, useDispatch } from 'react-redux';
import convertKelvinToCelsius from '../helpers/Helpers';

const Home = () => {
  const { observation, isLoading, hasObservation } = useSelector(state => state);
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
          {(!hasObservation && !isLoading) && <span>Clique em uma cidade para buscar informações</span>}
          {
            isLoading && (
              <>
                <span>Buscando informações da cidade...</span>
                <br />
                <Spin size="large" />
              </>
            )
          }
          {
            (hasObservation && !isLoading) && (
              <Card 
                title={observation.city}
                bordered={true} 
                style={{ width: 300 }}
              >
                <p>{observation.temp}<sup>o</sup> C</p>
                <p>Máx: {observation.max}<sup>o</sup> C</p>
                <p>Mín: {observation.min}<sup>o</sup> C</p>
              </Card>
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