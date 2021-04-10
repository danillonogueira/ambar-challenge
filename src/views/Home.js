import { Row, Col, Button, Spin, Card } from 'antd';
import { getCityData } from '../services/Services';
import { useSelector, useDispatch } from 'react-redux';
import convertKelvinToCelsius from '../helpers/Helpers';

const Home = () => {
  const observation = useSelector(state => state.observation);
  const isLoading = useSelector(state => state.isLoading)
  const hasObservation = useSelector(state => state.hasObservation);
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

  const handleClick = (city) => {
    startFetching();
    getCityData(city)
      .then((response) => {
        const { temp, temp_min, temp_max } = response.data.main;
        
        storeObservation({
          city,
          temp: convertKelvinToCelsius(temp),
          min: convertKelvinToCelsius(temp_min),
          max: convertKelvinToCelsius(temp_max)
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