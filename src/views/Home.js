import { Row, Col, Button } from 'antd';
import CityButton from './../components/CityButton';
import styled from 'styled-components';
import { UnorderedListOutlined } from '@ant-design/icons';
import Display from './../components/Display';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const StyledHome = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Home = () => {
  const dispatch = useDispatch();
  
  // Ideally this must be done when user leaves History, lets see if it does the job though
  useEffect(() => {
    dispatch({ type: 'RESET_FIREBASE_LISTENING'});
  }, [dispatch]);

  return (
    <StyledHome>
      <Row gutter={[10, 10]}>
        <Col lg={8} xs={24}>
          <CityButton city={'Ribeirão Preto'} />
        </Col>
        <Col lg={8} xs={24}>
          <CityButton city={'Araraquara'} />
        </Col>
        <Col lg={8} xs={24}>
          <CityButton city={'São Carlos'} />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Display />
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