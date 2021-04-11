import { Row, Col, Button } from 'antd';
import CityButton from './../components/CityButton';
import styled from 'styled-components';
import { UnorderedListOutlined } from '@ant-design/icons';
import Display from './../components/Display';
import { Link } from 'react-router-dom';

const StyledHome = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Home = () => {
  return (
    <StyledHome>
      <Row gutter={[10, 10]}>
        {/* <Col span={24}>
          <CityButton city={'Ribeirão Preto'} />
          <CityButton city={'Araraquara'} />
          <CityButton city={'São Carlos'} />
        </Col> */}
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