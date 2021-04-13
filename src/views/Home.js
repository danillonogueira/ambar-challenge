import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { getObservation } from '../services/GetObservation';
import { filterCityData } from '../helpers/Filters';
import { postObservation } from './../services/Firebase';
import { showSuccessNotification, showFailureNotification, showWarningNotification } from './../helpers/Notifications';
import { startFetching, stopFetching, storeObservation } from './../store/Actions';
import { Row, Col, Button } from 'antd';
import CityButton from './../components/CityButton';
import { UnorderedListOutlined } from '@ant-design/icons';
import Display from './../components/Display';
import { Link } from 'react-router-dom';

const StyledHome = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Home = () => {
  const { isLoading, hasObservation, observation } = useSelector(state => state.temperatures);
  const dispatch = useDispatch();

  const handleClick = (city) => {
    dispatch(startFetching());
    getObservation(city)
      .then((response) => {
        const { data } = response;
        const { icon } = data.weather[0];
        const newObservation = filterCityData(data.main, city);
        
        postObservation(newObservation)
          .then(() => showSuccessNotification())
          .catch(() => showWarningNotification())
          .finally(() => {
            dispatch(
              storeObservation({
                ...newObservation,
                icon
              })
            );
          });
      })
      .catch(() => {
        showFailureNotification();
        dispatch(stopFetching());
      });
  };

  return (
    <StyledHome>
      <Row gutter={[10, 10]}>
        <Col lg={8} xs={24}>
          <CityButton 
            city={'Ribeirão Preto'}
            clickHandler={handleClick}
            isLoading={isLoading}
          />
        </Col>
        <Col lg={8} xs={24}>
          <CityButton 
            city={'Araraquara'}
            clickHandler={handleClick}
            isLoading={isLoading}
          />
        </Col>
        <Col lg={8} xs={24}>
          <CityButton 
            city={'São Carlos'}
            clickHandler={handleClick}
            isLoading={isLoading}
          />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Display
            isLoading={isLoading}
            hasObservation={hasObservation}
            observation={observation}
          />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Link to="/history">
            <Button 
              type="primary" 
              size="large"
              shape={'round'}
              icon={<UnorderedListOutlined />}
              disabled={isLoading}
            >
              Mostrar Mín/Máx
            </Button>
          </Link>
        </Col>
      </Row>
    </StyledHome>
  );
};

export default Home;
