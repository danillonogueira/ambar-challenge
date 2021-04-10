import { Row, Col, Button, Spin, Card } from 'antd';
import { useSelector } from 'react-redux';
import CityButton from './../components/CityButton';
import styled from 'styled-components';
import { UnorderedListOutlined } from '@ant-design/icons';

const StyledHome = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #EEE;
`;

const Home = () => {
  const { observation, isLoading, hasObservation } = useSelector(state => state);

  return (
    <StyledHome>
      <Row>
        <Col span={24}>
          <CityButton city={'Ribeirão Preto'} />
          <CityButton city={'Araraquara'} />
          <CityButton city={'São Carlos'} />
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
                style={{ 
                  width: 300,
                  margin: '20px 0',
                  textAlign: 'center'
                }}
              >
                <p><strong>Atual:</strong> {observation.temp}<sup>o</sup> C</p>
                <p>Mín: {observation.min}<sup>o</sup> C</p>
                <p>Máx: {observation.max}<sup>o</sup> C</p>
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
            shape={'round'}
            icon={<UnorderedListOutlined />}
          >
            Mostrar Mín/Máx
          </Button>
        </Col>
      </Row>
    </StyledHome>
  );
};

export default Home;